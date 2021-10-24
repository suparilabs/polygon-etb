## Polygon smart contracts
The following questions does knowledge check on smart contracts deployment and L1-L2 communication between Ethereum and Polygon

**1. Smart contracts deployable on Ethereum are not deployable on Polygon.**
- [ ] True
- [ ] False

**2. What is the name of ParentChain for Polygon-Mainnet and Mumbai-testnet respectively?**
- [ ] Ethereum and Goerli
- [ ] Goerli and Ethereum
- [ ] Matic and Ethereum
- [ ] Ethereum and Matic

**3. Using which contract on Ethereum mainnet does Polygon validators relay the messages from Ethereum to Polygon?**
- [ ] `StateSender`
- [ ] `ValidatorShare`
- [ ] `Registry`
- [ ] `PriorityQueue`

**4. Which of the following is pre-requisite to enable two way data transfer between between Ethereum and Polygon**
- [ ] Inherit `FxBaseRootTunnel` on Ethereum contract and `FxBaseChildTunnel` on Polygon contract
- [ ] Inherit `FxBaseRootTunnel` on Polygon contract and `FxBaseChildTunnel` on Ethereum contract

**5. Which of the following is true for sending message from Ethereum to Polygon?**
- [ ] call `_sendMessageToChild(bytes memory message)` in the Ethereum contract that inherits `FxBaseRootTunnel`
- [ ] call `_sendMessageToRoot(bytes memory message)` in the Polygon contract that inherits `FxBaseChildTunnel`

**6. Which of the following is true for sending message from Polygon to Ethereum?**
- [ ] call `_sendMessageToChild(bytes memory message)` in the Ethereum contract that inherits `FxBaseRootTunnel`
- [ ] call `_sendMessageToRoot(bytes memory message)` in the Polygon contract that inherits `FxBaseChildTunnel`

**7. In your child contract, which function is implemented  in `FxBaseChildTunnel` to retrieve data from Ethereum?**
- [ ] `_processMessageFromRoot()`
- [ ] `_processMessageFromChild()` 

**8. The data will be received automatically from the state receiver when the state is synced while transferring data from Ethereum to Polygon.**
- [ ] True
- [ ] False

**9. In your root contract, which function is implemented  in `FxBaseRootTunnel` to retrieve data from Polygon?**
- [ ] `_processMessageFromRoot()`
- [ ] `_processMessageFromChild()`

**10. The data will be received from child chain to root chain when `receiveMessage()` is called by passing proof of of transaction hash when sendMessageToRoot() is called**
- [ ] True
- [ ] False