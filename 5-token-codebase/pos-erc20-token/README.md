# Matic PoS (Proof-of-Stake) portal contracts



* Mapping tokens : [https://mapper.matic.today/map/](https://mapper.matic.today/map/)
* List of tokens mapped : [https://mapper.matic.today/](https://mapper.matic.today/)

### Contract Deployments
#### Matic mapped ERC20 token
* posRootERC20 (goerli) : `0x93e2CE316901D0a32a30A13DE7E99Cf0f14bb596` (MATT)
* posChildERC20 (mumbai) : ``

#### Matic mapped custom ERC20 token

- [X] Child contract is verified on Polygon/Mumbai explorer
- [X] The deposit and withdraw functions are present on the child token contract. (Reference Template contract - ERC20)
- [X] Only the ChildChainManagerProxy address has the right to call the deposit function. (ChildChainManagerProxy - on Mumbai)
- [X] Mint function is an internal function (This gets called by deposit function internally)

* ChildChainManagerProxy (mumbai) : `0xb5505a6d998549090530911180f38aC5130101c6`
* posRootERC20 (goerli) : `0x8199B05AE66c2Fa833E79A0cabA902803EB37510` (MTT)
* posChildERC20 (mumbai) : `0x3838d31127871fbAa96fdC2EebBD945d702e4A45` (MTT)

### References
* https://github.com/maticnetwork/pos-portal 