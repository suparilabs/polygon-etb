## Introduction to Polygon gas station and Polygonscan's API service

### Pre-requisites
* Install Node JS v12.x.x and above
* Install yarn  - `npm install -g yarn`
* Polygonscan API key

### Getting Started
* Run `yarn` to install all dependencies
* Create `.env` file from `env.example` and paste the Polygonscan API key there

### Polygonscan API

#### Retrieving the block number by timestamp
* Run `node ./getBlockNumberByTimeStamp.js`
* Example output
```console
The block number at timestamp 1601510400 is 5164199
```

#### Checking transaction receipt status
* Run `node ./checkTransactionReceiptStatus.js`
* Example output
```console
The transaction receipt status of 0x88da07a53862ba8376539304b932d23fe6305d9f0144d71fc43f564a183dc422 is success
```

#### Checking MATIC balance of EOA account
* Run `node ./getMATICBalance.js`
* Example output
```console
The balance of 0xe7804c37c13166fF0b37F5aE0BB07A3aEbb6e245 is 66205231.732964011356348577 MATIC
```

#### Retrieve contract ABI
* Run `node ./getContractABI.js`
* Example output
```console
The ABI of the contract 0x841ce48f9446c8e281d3f1444cb859b4a6d0738c is [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"transferId","type":"bytes32"},{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"hashlock","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"timelock","type":"uint64"},{"indexed":false,"internalType":"uint64","name":"srcChainId","type":"uint64"},{"indexed":false,"internalType":"bytes32","name":"srcTransferId","type":"bytes32"}],"name":"LogNewTransferIn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"transferId","type":"bytes32"},{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"hashlock","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"timelock","type":"uint64"},{"indexed":false,"internalType":"uint64","name":"dstChainId","type":"uint64"},{"indexed":false,"internalType":"address","name":"dstAddress","type":"address"}],"name":"LogNewTransferOut","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"transferId","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"preimage","type":"bytes32"}],"name":"LogTransferConfirmed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"transferId","type":"bytes32"}],"name":"LogTransferRefunded","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_transferId","type":"bytes32"},{"internalType":"bytes32","name":"_preimage","type":"bytes32"}],"name":"confirm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_transferId","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dstAddress","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes32","name":"_hashlock","type":"bytes32"},{"internalType":"uint64","name":"_timelock","type":"uint64"},{"internalType":"uint64","name":"_srcChainId","type":"uint64"},{"internalType":"bytes32","name":"_srcTransferId","type":"bytes32"}],"name":"transferIn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bridge","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes32","name":"_hashlock","type":"bytes32"},{"internalType":"uint64","name":"_timelock","type":"uint64"},{"internalType":"uint64","name":"_dstChainId","type":"uint64"},{"internalType":"address","name":"_dstAddress","type":"address"}],"name":"transferOut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"transfers","outputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"hashlock","type":"bytes32"},{"internalType":"uint64","name":"timelock","type":"uint64"},{"internalType":"enum CBridge.TransferStatus","name":"status","type":"uint8"}],"stateMutability":"view","type":"function"}]
```

#### Retrieve total supply given the token contract address
* Run `node ./erc20TokenSupplyByContractAddress.js`
* Example output
```console
The token supply of contract 0x2791bca1f2de4661ed88a30c99a7a9449aa84174 is 835783395.491922 USDC
```

### Polygons gas station API

#### Get recommended gas price
* Run `node ./getRecommendedGasPrice.js`
* Example output
```console
The recommended gas price is : 
 {
  safeLow: 50,
  standard: 76.338054814,
  fast: 80,
  fastest: 200,
  blockTime: 2,
  blockNumber: 18853439
}
```