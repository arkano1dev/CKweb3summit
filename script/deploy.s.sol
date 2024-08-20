// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/CKToken.sol";
import "../src/KnightsProtocol.sol";
import "../src/OrderList.sol";
import "../src/Trader.sol";

contract DeployContracts is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        // Define the Uniswap V3 router and WBTC addresses dynamically based on the chain
        address uniswapV3Router = 0xE592427A0AEce92De3Edee1F18E0157C05861564; // Uniswap V3 router address on Arbitrum
        address wbtcTokenAddress = 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599; // WBTC address on Arbitrum
        address btcPriceFeedAddress = 0xd0C7101eACbB49F3deCcCc166d238410D6D46d57; // Chainlink BTC/USD price feed on Arbitrum

        // Deploy OrderList
        OrderList orderList = new OrderList(address(0)); // Placeholder address for protocol

        // Deploy CKToken
        CKToken ckToken = new CKToken(address(0)); // Placeholder address for protocol

        // Initialize an empty AssetAllocation array
        KnightsProtocol.AssetAllocation[] memory emptyAllocations;

        // Deploy KnightsProtocol with an empty allocations array and BTC price feed
        KnightsProtocol knightsProtocol = new KnightsProtocol(
            address(orderList),
            address(0), // Placeholder for Trader address
            emptyAllocations,
            btcPriceFeedAddress
        );

        // Update protocol address in CKToken and OrderList
        orderList.setProtocol(address(knightsProtocol));

        // Add allocations using the addAllocation function
        knightsProtocol.addAllocation(
            0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f, // BTC address on Arbitrum
            50,
            0xd0C7101eACbB49F3deCcCc166d238410D6D46d57 // Chainlink BTC/USD price feed address
        );
        knightsProtocol.addAllocation(
            0x82aF49447D8a07e3bd95BD0d56f35241523fBab1, // ETH address
            20,
            0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612 // Chainlink ETH/USD price feed address
        );
        knightsProtocol.addAllocation(
            0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0, // UNI address
            10,
            0x9C917083fDb403ab5ADbEC26Ee294f6EcAda2720 // Chainlink UNI/USD price feed address
        );
        knightsProtocol.addAllocation(
            0xf97f4df75117a78c1A5a0DBb814Af92458539FB4, // LINK address
            10,
            0x86E53CF1B870786351Da77A57575e79CB55812CB // Chainlink LINK/USD price feed address
        );
        knightsProtocol.addAllocation(
            address(ckToken), // CKToken address
            10,
            0x0000000000000000000000000000000000000000 
        );

        // Deploy Trader
        Trader trader = new Trader(
            address(orderList),
            uniswapV3Router,
            address(knightsProtocol),
            wbtcTokenAddress
        );

        // Update protocol's trader address
        knightsProtocol.setTrader(address(trader));

        vm.stopBroadcast();
    }
}
