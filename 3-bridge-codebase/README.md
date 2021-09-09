## Polygon bridge DApp

### Getting Started
* MetaMask Enable browser
* run `yarn` to install all the required packages
* Create `.env` file from `env.example` and rpc url to access goerli
* run `yarn start` from root directory to start the react project
* navigate to http://localhost:3000 to view the DApp. Allow the DApp to access MetaMask.
* Get some Goerli testnet Ethers in your MetaMask wallet. Head over to [Goerli faucet](https://goerli-faucet.slock.it/)
* Add Mumbai Matic network to MetaMask
* Get some test MATIC and PoS/Plasma ERC20 tokens from [Polygon Faucet](https://faucet.polygon.technology/)
* Add Root ERC20 token to MetaMask under Goerli network
* Add ChildPoSERC20, PoSMaticWETH and PlasmMaticWETH tokens to MetaMask under Mumbai Matic Testnet.

### Config

Replace the token addresses in src/config.json with your corresponding token addresses

* posRootERC20 : ERC20 root token address on pos bridge
* posChildERC20 : ERC20 child token address on pos bridge
* posWETH : PoS Weth
* rootChainWETH: WETH deployed on root chain
* plasmaWETH : Plasma WETH
* plasmaRootERC20 : ERC20 root token deployed on plasma
* plasmaChildERC20 : ERC20 child token deployed on plasma
* MATIC_RPC": RPC for child chain,
* "ETHEREUM_RPC": RPC for root chain, 
* "VERSION": network version, 
* "NETWORK": "testnet" or "mainnet"
* "MATIC_CHAINID": Chain ID of child chain, 
* "ETHEREUM_CHAINID": Chain ID of root chain

The corresponding configuration and key values for matic mainnet and mumbai testnet can be found here :
* mainnet :  https://static.matic.network/network/testnet/mumbai/index.json
* testnet :  https://static.matic.network/network/mainnet/v1/index.json

### PoS Bridge


#### Transfer ETH from Ethereum network to Matic PoS
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "Ether" from the dropdowns
3. Fill up the input control with the Ether to transfer to PoS Bridge.
4. Click on Deposit and select "Confirm" on MetaMask popup. Wait until transaction gets Mined
5. Change the network on MetaMask to "Matic Mumbai Testnet". Add posWETH token. You should be able to see increase in balance as per Eth deposited in step 4.

#### Withdraw ETH from Matic PoS back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "Ether" from the dropdowns
3. Fill up the input control with the value to transfer to back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Exit button and wait until transaction get mined.
7. Your selected account balance will increase after transaction is mined.

#### Transfer ERC20 token from Ethereum network to Matic PoS
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC20" from the dropdowns
3. Fill up the input control with the ERC20 tokens to transfer to PoS Bridge.
4. Click on Deposit and You will see two MetaMask popups back to back for approving and transferring. Select "Confirm" on MetaMask popups.
5. Change the network on MetaMask to "Matic Mumbai Testnet". Add posChildERC20 token. You should be able to see increase in balance as per ERC20 tokens deposited in step 4.

#### Withdraw ERC20 from Matic PoS back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC20" from the dropdowns
3. Fill up the input control with the value to transfer ERC20 token back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Exit button and wait until transaction get mined.
7. Your selected account's ERC20 balance will increase after transaction is mined.

### Plasma Bridge

#### Transfer ETH from Ethereum network to Matic Plasma
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Plasma" and "Ether" from the dropdowns
3. Fill up the input control with the Ether to transfer to Plasma Bridge.
4. Click on Deposit and select "Confirm" on MetaMask popup. Wait until transaction gets Mined
5. Change the network on MetaMask to "Matic Mumbai Testnet". Add plasmaWETH token. You should be able to see increase in balance as per Eth deposited in step 4.

#### Withdraw ETH from Matic Plasma back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Plasma" and "Ether" from the dropdowns
3. Fill up the input control with the value of Eth to transfer back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Confirm Withdraw button and wait until transaction get mined. Copy the transaction hash.
7. Fill the input control with transaction hash and click on Exit 
8. Your selected account balance will increase after transaction is mined.

#### Transfer ERC20 token from Ethereum network to Matic Plasma
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Plasma" and "ERC20" from the dropdowns
3. Fill up the input control with the tokens to transfer to Plasma Bridge.
4. Click on Deposit and select "Confirm" on MetaMask popup. Wait until transaction gets Mined
5. Change the network on MetaMask to "Matic Mumbai Testnet". Add plasmaChildERC20 token. You should be able to see increase in balance as per tokens deposited in step 4.

#### Withdraw ERC20 from Matic Plasma back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Plasma" and "ERC20" from the dropdowns
3. Fill up the input control with the value of tokens to transfer back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Confirm Withdraw button and wait until transaction get mined. Copy the transaction hash.
7. Fill the input control with transaction hash and click on Exit 
8. Your selected account's plasmaRootERC20 token balance will increase after transaction is mined.

Recommended Resources
* [Deposit and Checkpoint Event Tracking - PoS](https://docs.matic.network/docs/develop/ethereum-matic/pos/deposit-withdraw-event-pos/)
