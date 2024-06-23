# ERC-2771 Sample Implementation

## EIP-2771
https://eips.ethereum.org/EIPS/eip-2771

## Implementation
* contract: SimpleToken, SimpleForwarder
* front: Sign with `eth_signTypedData_v4`
* relayer: Gas Relay

## Addresses
* deployer: 0xD1DDB6BEb883C052787273e83929087d608eC649
* relayer: 0xD3D7888F67C56B0F9a5f67D8b5D5eddC45993916
* alice: 0xD4D393F40c2a0d80061296660b593D591F6E4763
* bob: 0xD5Dc16f9A85d26582c3Ed172761c5b46F1346947

## Scenario
1. Deploy SimpleForwarder and SimpleToken
2. Transfer 100 tokens to Alice from Deployer
3. Start front docker
4. Start relayer docker
5. Use alice's wallet to sign the transaction
6. Confirm the transaction

## Tx Log
https://sepolia.etherscan.io/tx/0x17ceefb043bdb1b70c23d02380614ec1173b7070ac58ce077b0664f73ed1d60f
