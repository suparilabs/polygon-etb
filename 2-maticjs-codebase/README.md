## Introduction to Matic.js

### Pre-requisites
* Install Node JS v12.x.x and above
* Install yarn  - `npm install -g yarn`
* Ethereum Private key (use MetaMask wallet)
* Goerli RPC URL (use infura, alchemy or any other node provider that you like)

### Getting Started
* Run `yarn` to install all dependencies
* Create `.env` file from `env.example` and paste the private key as well rpc url to access goerli

### Run script

run any example script by using

```
node <file_path>
```

let's run a plasma erc20 balance example

```
node erc20PlasmaBalance.js
```

#### Recommended Resources:
* [Matic.js GitHub Repository](https://github.com/maticnetwork/matic.js)
* Docs
    * [Matic.js Docs](https://maticnetwork.github.io/matic.js/docs)
    * [Instantiating SDK](https://docs.matic.network/docs/develop/ethereum-matic/pos/using-sdk/getting-started)
* [Polygon genesis contracts](https://docs.matic.network/docs/develop/network-details/genesis-contracts)