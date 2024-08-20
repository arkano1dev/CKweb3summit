// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OrderList {
    enum OrderType { Buy, Sell }

    struct Order {
        address token;
        uint256 amount;
        OrderType orderType;
    }

    Order[] public orders;
    address public protocol;

    modifier onlyProtocol() {
        require(msg.sender == protocol, "Only protocol can call this function");
        _;
    }

    constructor(address _protocol) {
        protocol = _protocol;
    }

    function addOrder(address _token, uint256 _amount, OrderType _orderType) external onlyProtocol {
        orders.push(Order({
            token: _token,
            amount: _amount,
            orderType: _orderType
        }));
    }

    function getOrder(uint256 _index) external view returns (Order memory) {
        return orders[_index];
    }

    function removeOrder(uint256 _index) external onlyProtocol {
        require(_index < orders.length, "Order does not exist");
        orders[_index] = orders[orders.length - 1];
        orders.pop();
    }

    function orderCount() external view returns (uint256) {
        return orders.length;
    }

    function setProtocol(address _protocol) external {
        protocol = _protocol;
    }
}
