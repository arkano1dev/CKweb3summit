// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./OrderList.sol";
import "./KnightsProtocol.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Trader {
    OrderList public orderList;
    ISwapRouter public swapRouter;
    KnightsProtocol public protocol;
    address public WBTC;  // Address of the WBTC token

    constructor(
        address _orderList,
        address _swapRouter,
        address _protocol,
        address _WBTC
    ) {
        orderList = OrderList(_orderList);
        swapRouter = ISwapRouter(_swapRouter);
        protocol = KnightsProtocol(_protocol);
        WBTC = _WBTC;
    }
    
    function executeOrder(uint256 _orderIndex) external {
        OrderList.Order memory order = orderList.getOrder(_orderIndex);

        if (order.orderType == OrderList.OrderType.Buy) {
            executeBuyOrder(order.token, order.amount);
        } else if (order.orderType == OrderList.OrderType.Sell) {
            executeSellOrder(order.token, order.amount);
        }

        protocol.updateBalances(order.token, IERC20(order.token).balanceOf(address(this)));
        orderList.removeOrder(_orderIndex);
    }

    function executeBuyOrder(address _token, uint256 _amount) internal {
        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
            tokenIn: WBTC,
            tokenOut: _token,
            fee: 3000, // Uniswap pool fee (0.3%)
            recipient: address(this),
            deadline: block.timestamp,
            amountIn: _amount,
            amountOutMinimum: 0, // Accept any amount of output tokens
            sqrtPriceLimitX96: 0
        });

        IERC20(WBTC).approve(address(swapRouter), _amount);
        swapRouter.exactInputSingle(params);
    }

    function executeSellOrder(address _token, uint256 _amount) internal {
        IERC20(_token).approve(address(swapRouter), _amount);

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
            tokenIn: _token,
            tokenOut: WBTC,
            fee: 3000, // Uniswap pool fee (0.3%)
            recipient: address(this),
            deadline: block.timestamp,
            amountIn: _amount,
            amountOutMinimum: 0, // Accept any amount of output tokens
            sqrtPriceLimitX96: 0
        });

        swapRouter.exactInputSingle(params);
    }

    // Function to handle incoming WBTC when selling tokens
    receive() external payable {}
}
