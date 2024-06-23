// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {SimpleToken} from "../src/SimpleToken.sol";
import {SimpleForwarder} from "../src/SimpleForwarder.sol";

contract DeployScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PRIV_KEY");
        vm.startBroadcast(deployerPrivateKey);

        address trustedForwarder = address(new SimpleForwarder("SimpleForwarder"));

        new SimpleToken("SimpleToken", "ST", trustedForwarder);

        vm.stopBroadcast();
    }
}
