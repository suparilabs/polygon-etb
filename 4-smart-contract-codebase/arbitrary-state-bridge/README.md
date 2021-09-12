## Arbitrary State transfer between Ethereum and Matic

### Getting started
* run `yarn`
* Create `.env` file from `env.example` then add your private key and goerli rpc url.


### Resources
* `FxChild` (FxChild.sol)  and `FxRoot` (FxRoot.sol) are main contracts on which mapping-less bridge works. It calls and passes data to user-defined methods on another chain without mapping.

**Mumbai**

| Contract | Deployed address  |
| :----- | :- |
| [FxRoot (Goerli)](https://goerli.etherscan.io/address/0x3d1d3E34f7fB6D26245E6640E1c50710eFFf15bA#code) | `0x3d1d3E34f7fB6D26245E6640E1c50710eFFf15bA` |
| [FxChild (Mumbai)](https://explorer-mumbai.maticvigil.com/address/0xCf73231F28B7331BBe3124B907840A94851f9f11/contracts) | `0xCf73231F28B7331BBe3124B907840A94851f9f11`|

**Mainnet**


| Contract | Deployed address  |
| :----- | :- |
| [FxRoot (Ethereum Mainnet)](https://etherscan.io/address/0xfe5e5d361b2ad62c541bab87c45a0b9b018389a2#code) | `0xfe5e5D361b2ad62c541bAb87C45a0B9B018389a2` |
| [FxChild (Matic Mainnnet)](https://explorer-mainnet.maticvigil.com/address/0x8397259c983751DAf40400790063935a11afa28a/contracts) | `0x8397259c983751DAf40400790063935a11afa28a`|


### Miscellaneous

* arbitrary message
```
0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000b48656c6c6f20576f726c64000000000000000000000000000000000000000000
```