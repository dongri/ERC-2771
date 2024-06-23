## Install & Deploy
```
$ forge install OpenZeppelin/openzeppelin-contracts --no-commit --quiet

$ forge build

$ make deploy

##### sepolia
✅  [Success]Hash: 0xc4cb5f28d1f9c034dba145cb90b2f7123b8d7a4db9372127ebdf74ebc763f2e9
Contract Address: 0x33DDac9CB0BCa2F0610ff8C4B567838B62B34619
Block: 6167872
Paid: 0.00283446602092192 ETH (923192 gas * 3.07028876 gwei)


##### sepolia
✅  [Success]Hash: 0x811c4c2c4bc9629aa0a52b50b167d90cb543eda0db20b714ce726ef3d6df0fd4
Contract Address: 0x822deFf18dc849AFF4BD0c03818B3824DFDe3427
Block: 6167872
Paid: 0.00201310544213548 ETH (655673 gas * 3.07028876 gwei)
```

## Get ABI
```
$ forge inspect SimpleToken abi | jq -c
[{"type":"constructor","inputs":[{"name":"name","type":"string","internalType":"string"}]....}]

$ forge inspect SimpleForwarder abi | jq -c
[{"type":"constructor","inputs":[{"name":"name","type":"string","internalType":"string"}]....}]
```
