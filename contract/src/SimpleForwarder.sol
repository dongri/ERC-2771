// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/metatx/ERC2771Forwarder.sol";

contract SimpleForwarder is ERC2771Forwarder {
    constructor(string memory name) ERC2771Forwarder(name) {}
}
