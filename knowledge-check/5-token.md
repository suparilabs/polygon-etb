## Mapping tokens on Polygon bridges
The following questions does knowledge check on mapping assets using Polygon's POS and Plasma bridges.

**1. In the case of Polygon Mintable tokens, assets are created on Polygon.**
- [ ] True
- [ ] False

**2. Which contract on the Ethereum is responsible for minting assets when Polygon assets are moved to Ethereum?**
- [ ] MintableAssetPredicate
- [ ] Merkle
- [ ] MerklePatriciaProof
- [ ] StakingNFT

**3. For deploying custom mintable asset contract on Polygon chain, which of the following additional functions must be implemented?(Select all that apply)**
- [ ] `deposit`
- [ ] `withdraw`
- [ ] `mint`
- [ ] `transfer`

**4. In the mintable asset contract on Etherem chain, which contract deployed on Ethereum should be given the minter role?**
- [ ] `MintableAssetProxy`
- [ ] `DepositManager`
- [ ] `ExitNFT`
- [ ] `StakingNFT`

**5. For mapping assets on PoS bridge, it is a good practice to not mint token in the constructor while deploying custom child token in Polygon chain**
- [ ] True
- [ ] False

**6. Which of the following additional methods should present in custom child token contract used for mapping assets on PoS bridge?(select all that apply)**
- [ ] `deposit` 
- [ ] `withdraw`
- [ ] `transfer`
- [ ] `transferfrom `

**7.  In token mapping, the child token is deployed on ____ and root token is deployed on ______.**
- [ ] Polygon, Ethereum
- [ ] Ethereum, Polygon
- [ ] Polygon, Polygon
- [ ] Ethereum, Ethereum


**8. Which function on ChildChain contract should be called to deploy child token on Polygon with restricted functionality?**
- [ ] `addToken`
- [ ] `mapToken`
- [ ] `withdrawTokens`

**9. A mapping on Registry contract on Ethereum is updated for each asset to be mapped. Which function is called on this contract?**
- [ ] `updateContractMap`
- [ ] `mapToken`
- [ ] `addPredicate`

**10. What is the key component in plasma framework that keeps the bridge secured?**
- [ ] fraud proofs
- [ ] check points
- [ ] Bor
- [ ] Heimdall
