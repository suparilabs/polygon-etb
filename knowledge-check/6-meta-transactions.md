## Meta transactions
The following questions checks your knowledge on meta transaction using Polygon network.

**1. A third-party can send another user's transactions and pay themselves for the gas cost. What is the name given to this idea?**
- [ ] Gas-less transaction
- [ ] Contract deployment transaction
- [ ] Fund transfer transaction
- [ ] Function call transaction

**2. In order for meta-transaction to take place, which of following actor is responsible for paying gas?**
- [ ] Biconomy's [`BiconomyForwarder.sol`](https://github.com/bcnmy/mexa/blob/master/contracts/6/forwarder/BiconomyForwarder.sol) contract
- [ ] Transaction signer
- [ ] signature verifier
- [ ] Blockchain

**3. Which of the following is an EIP standard that states the contract interface for receiving meta transactions through a trusted forwarder?**
- [ ] EIP-712
- [ ] EIP-2771
- [ ] EIP-1967
- [ ] EIP-897

**4. Which of following changes are required to allow your contract accept meta transactions while using Biconomy's relayer infrastructure?(Select all that apply)**
- [ ] Inherit [`EIP712MetaTransaction.sol`](https://github.com/bcnmy/metatx-standard/blob/master/src/contracts/EIP712MetaTransaction.sol)
- [ ] Inherit [`BasicMetaTransaction.sol`](https://github.com/bcnmy/metatx-standard/blob/basic-signature-metatx/src/contracts/BasicMetaTransaction.sol)
- [ ] All of the above
- [ ] None of the above

**5. Which of the following library can be used to enable meta transaction with Biconomy on the client-side?**
- [ ] `@biconomy/mexa`
- [ ] `web3.js`
- [ ] `ethers.js`
- [ ] `web3.py`