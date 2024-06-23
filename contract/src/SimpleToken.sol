// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/metatx/ERC2771Context.sol";

contract SimpleToken is ERC20, ERC2771Context {
    constructor(string memory name, string memory symbol, address trustedForwarder) ERC20(name, symbol) ERC2771Context(trustedForwarder) {
        _mint(msg.sender, 1000000 * 10 ** decimals()); // Initial supply of 1,000,000 tokens
    }

    function _msgSender() internal view override(Context, ERC2771Context) returns (address sender) {
        return ERC2771Context._msgSender();
    }

    function _msgData() internal view override(Context, ERC2771Context) returns (bytes calldata) {
        return ERC2771Context._msgData();
    }

    function _contextSuffixLength() internal view virtual override(Context, ERC2771Context) returns (uint256) {
        return ERC2771Context._contextSuffixLength();
    }
}
