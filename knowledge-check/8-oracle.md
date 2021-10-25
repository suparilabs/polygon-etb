## Oracle
The following question checks your knowledge on Oracle

**1. A secure piece of middleware that facilitates communication between blockchains and any off-chain system, including data providers, web APIs, enterprise backends, cloud providers, IoT devices, e-signatures, payment systems, other blockchains,etc is know as:**
- [ ] Blockchain Oracle
- [ ] Transaction
- [ ] Miner
- [ ] Validator

**2. Blockchain is non-deterministic**
- [ ] True
- [ ] False

**3. What is the barrier that Blockchains like Polygon face for bringing off-chain data to the Smart contracts?**
- [ ] Oracle problem
- [ ] Security vulnerabilities
- [ ] Transaction throughput
- [ ] Decentralization

**4. Which solution are available for solving Polygon's Oracle problem?(Select all that apply)**
- [ ] Chainlink
- [ ] UMA
- [ ] Banchain
- [ ] Razor

**5. Bob wants to develop a smart contract that consumes the exchange rate between BTC and CNY. Which Chainlink's contract will Bob's contract must inherit?**
- [ ] [`ChainlinkClient`](https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/ChainlinkClient.sol)
- [ ] [`AggregatorV3Interface`](https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol)
- [ ] [`VRFConsumerBase`](https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/VRFConsumerBase.sol)
- [ ] [`KeeperBase`](https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/KeeperBase.sol) 

**6. Alice is building a lottery contract. She wants a temper-proof and verifiable way randomly pick winner during the `draw`. Which of the following Chainlink's product should Alice use.**
- [ ] [Chainlink VRF](https://chain.link/chainlink-vrf)
- [ ] Chainlink Keepers
- [ ] Chainlink Data feeds
- [ ] None of the above

**7. Alice is building a lottery contract. She wants to use Chainlink's VRF. Which of the following contract should she inherit?**
- [ ] [VRFConsumerBase](https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.8/VRFConsumerBase.sol)
- [ ] [`ChainlinkClient`](https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/ChainlinkClient.sol)
- [ ] [`AggregatorV3Interface`](https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol)
- [ ] [`KeeperBase`](https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/KeeperBase.sol)

**8. Alice is building a lottery contract. She is inheriting Chainlink VRF's `VRFConsumerBase` contract. Which of the following function she must implement?(Select all that apply)**
- [ ] `requestRandomness`
- [ ] `fulfillRandomness`
- [ ] All of the above
- [ ] None of the above

**9. In order for your contract to consume randomness, which of the following pre-requisites are NOT true? (Select all that apply)**
- [ ] LINK Token
- [ ] VRF Coordinator
- [ ] key Hash
- [ ] Fee
- [ ] None of the above

**10. Which smart contract is deployed by Chainlink that has mapping of assets to feeds?**
- [ ] [`AggregatorV3Interface`](https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol)
- [ ] `Feed Registry`
- [ ] [VRFConsumerBase](https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.8/VRFConsumerBase.sol)
- [ ] [`ChainlinkClient`](https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/ChainlinkClient.sol)