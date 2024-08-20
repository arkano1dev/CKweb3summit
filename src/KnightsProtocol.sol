// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CKToken.sol";
import "./OrderList.sol";
import "./Trader.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@chainlink-brownie-contracts/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";

contract KnightsProtocol is AutomationCompatibleInterface {
    struct AssetAllocation {
        address token;
        uint256 percentage; // Target allocation percentage
        address priceFeedUSD;  // Chainlink token/USD price feed address
    }

    AssetAllocation[] public allocations;
    OrderList public orderList;
    address public trader;
    mapping(address => uint256) public assetBalances;
    mapping(address => mapping(address => uint256)) public userBalances; // Tracks user deposits by token
    address public btcPriceFeed; // Chainlink BTC/USD price feed address

    constructor(
        address _orderList,
        address _trader,
        AssetAllocation[] memory _allocations,
        address _btcPriceFeed
    ) {
        orderList = OrderList(_orderList);
        trader = _trader;
        btcPriceFeed = _btcPriceFeed;

        // Initialize allocations from the input
        for (uint256 i = 0; i < _allocations.length; i++) {
            allocations.push(_allocations[i]);
        }
    }


    modifier onlyTrader() {
        require(msg.sender == trader, "Only trader can call this function");
        _;
    }

    function setTrader(address _trader) external {
        trader = _trader;
    }

    // Function to get the BTC price from Chainlink
    function getBTCPrice() public view returns (uint256) {
        (, int256 price, , , ) = AggregatorV3Interface(btcPriceFeed).latestRoundData();
        return uint256(price);
    }

    // Function to get the USD price of a token
    function getTokenUSDPrice(address _priceFeed) public view returns (uint256) {
        (, int256 price, , , ) = AggregatorV3Interface(_priceFeed).latestRoundData();
        return uint256(price);
    }

    // Function to get the token/BTC price by dividing token/USD by BTC/USD
    function getTokenBTCPrice(address _priceFeedUSD) public view returns (uint256) {
        uint256 tokenUSDPrice = getTokenUSDPrice(_priceFeedUSD);
        uint256 btcUSDPrice = getBTCPrice();
        return (tokenUSDPrice * 1e18) / btcUSDPrice;
    }

    // Function to update the balance of a specific token after executing orders
    function updateBalances(address _token, uint256 _newBalance) external onlyTrader {
        assetBalances[_token] = _newBalance;
    }

    // Function to monitor the portfolio and create orders
    function monitorPortfolio() public {
        uint256 totalValueBTC = getTotalPortfolioValueBTC();

        for (uint256 i = 0; i < allocations.length; i++) {
            uint256 currentValueBTC = getAssetBTCValue(allocations[i].token, allocations[i].priceFeedUSD);
            uint256 targetValueBTC = (totalValueBTC * allocations[i].percentage) / 100;

            if (currentValueBTC > targetValueBTC) {
                uint256 excessBTC = currentValueBTC - targetValueBTC;
                uint256 excessTokens = excessBTC / getTokenBTCPrice(allocations[i].priceFeedUSD);
                orderList.addOrder(allocations[i].token, excessTokens, OrderList.OrderType.Sell);
            } else if (currentValueBTC < targetValueBTC) {
                uint256 shortageBTC = targetValueBTC - currentValueBTC;
                uint256 shortageTokens = shortageBTC / getTokenBTCPrice(allocations[i].priceFeedUSD);
                orderList.addOrder(allocations[i].token, shortageTokens, OrderList.OrderType.Buy);
            }
        }
    }

    // Helper function to get the total portfolio value in BTC
    function getTotalPortfolioValueBTC() internal view returns (uint256) {
        uint256 totalValueBTC = 0;
        for (uint256 i = 0; i < allocations.length; i++) {
            totalValueBTC += getAssetBTCValue(allocations[i].token, allocations[i].priceFeedUSD);
        }
        return totalValueBTC;
    }

    // Helper function to get the BTC value of a given asset
    function getAssetBTCValue(address _token, address _priceFeedUSD) internal view returns (uint256) {
        uint256 tokenBalance = assetBalances[_token];
        uint256 tokenPriceBTC = getTokenBTCPrice(_priceFeedUSD);
        return (tokenBalance * tokenPriceBTC) / 1e18; // Adjusting for 18 decimals
    }

    function checkUpkeep(bytes calldata) external view override returns (bool upkeepNeeded, bytes memory) {
        uint256 totalValueBTC = getTotalPortfolioValueBTC();

        for (uint256 i = 0; i < allocations.length; i++) {
            uint256 currentValueBTC = getAssetBTCValue(allocations[i].token, allocations[i].priceFeedUSD);
            uint256 targetValueBTC = (totalValueBTC * allocations[i].percentage) / 100;

            if (currentValueBTC > targetValueBTC || currentValueBTC < targetValueBTC) {
                return (true, bytes(""));
            }
        }

        return (false, bytes(""));
    }

    function performUpkeep(bytes calldata) external override {
        monitorPortfolio(); // Create orders if needed
    }

    // Function to deposit tokens into the protocol
    function depositToken(address _token, uint256 _amount) external {
        require(IERC20(_token).transferFrom(msg.sender, address(this), _amount), "Transfer failed");
        assetBalances[_token] += _amount;
        userBalances[msg.sender][_token] += _amount; // Track user's deposited balance
    }

    // Function to withdraw tokens from the protocol
    function withdrawToken(address _token, uint256 _amount, address _to) external {
        require(userBalances[msg.sender][_token] >= _amount, "Insufficient balance");
        userBalances[msg.sender][_token] -= _amount;
        assetBalances[_token] -= _amount;
        require(IERC20(_token).transfer(_to, _amount), "Transfer failed");
    }

    function addAllocation(address _token, uint256 _percentage, address _priceFeedUSD) external {
        allocations.push(AssetAllocation({
        token: _token,
        percentage: _percentage,
        priceFeedUSD: _priceFeedUSD
        }));
    }
}
