## Polygon mintable assets

### How to transfer mintable assets from Polygon to Ethereum
* If you intend to deploy your contract on Polygon Mainnet first,
* Mint the tokens on the Child chain first and
* Then move them back to the Root chain.

### Contract Deployments

#### Matic mapped mintable ERC20 token

>* The root chain contract is a standard ERC20 
>* The mint function on the root contract can only be called by the corresponding token PredicateProxyAddress

- ERC20PredicateProxy (mumbai) : `0xdD6596F2029e6233DEFfaCa316e6A95217d4Dc34`
- posRootERC20 (goerli) : `0xd9973620722385cA3972A6B7a6EB0957215270DE` (MIT)
- posChildERC20 (mumbai) : ``

#### Matic mapped custom mintable ERC20 token

>* Child contract is verified on Polygon/Mumbai explorer
>* The deposit and withdraw functions are present on the child token contract. (Reference Template contract - ERC20)
>* Only the ChildChainManagerProxy address has the right to call the deposit function. (ChildChainManagerProxy - on Mumbai)
>* The root chain contract is a standard ERC20
>* The mint function on the root contract can only be called by the corresponding token PredicateProxyAddress (PredicateProxy addresses for each token type can be found here

* ChildChainManagerProxy (mumbai) : `0xb5505a6d998549090530911180f38aC5130101c6`
* MintableERC20PredicateProxy (goerli) : `0x37c3bfC05d5ebF9EBb3FF80ce0bd0133Bf221BC8`
* posChildERC20 (mumbai) : `0x7Ac723C93c6B33D007DaA95fE0b739c1a7323382` (MCM)
* posRootERC20 (goerli) : `0xfb66B3FCCc886E754a0002f1e84d85a6b2b7aC82` (MCM)
