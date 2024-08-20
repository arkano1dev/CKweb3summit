// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CKToken is ERC20 {
    address public protocol;

    constructor(address _protocol) ERC20("CKToken", "CK") {
        protocol = _protocol;
    }

    modifier onlyProtocol() {
        require(msg.sender == protocol, "Only protocol can call this function");
        _;
    }

    function mint(address to, uint256 amount) external onlyProtocol {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlyProtocol {
        _burn(from, amount);
    }

    function setProtocol(address _protocol) external {
        protocol = _protocol;
    }
}
