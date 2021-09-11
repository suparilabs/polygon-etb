## Polygon bridge DApp

### Getting Started
* MetaMask Enable browser
* run `yarn` to install all the required packages
* Create `.env` file from `env.example` and rpc url to access goerli
* run `yarn start` from root directory to start the react project
* navigate to http://localhost:3000 to view the DApp. Allow the DApp to access MetaMask.
* Get some Goerli testnet Ethers in your MetaMask wallet. Head over to [Goerli faucet](https://goerli-faucet.slock.it/)
* Add Mumbai Matic network to MetaMask
* Get some test MATIC, posRootERC20, posRootERC721, posRootERC1155, plasmaRootERC20 and plasmaRootERC721 tokens from [Polygon Faucet](https://faucet.polygon.technology/)
* Add posRootERC20, posRootERC721, posRootERC1155, rootChainWETH, plasmaRootERC20, and plasmaRootERC721 to MetaMask under Goerli network
* Add posChildERC20, posChildERC721, posChildERC1155, posChildWETH, plasmaWETH,plasmChildERC20 and plasmaChildERC721  tokens to MetaMask under Mumbai Matic Testnet.

### Config

Replace the token addresses in src/config.json with your corresponding token addresses

* posRootERC20 : ERC20 root token address on pos bridge
* posChildERC20 : ERC20 child token address on pos bridge
* posRootERC721: ERC721 root token address on pos bridge
* posChildERC721: ERC721 child token address on pos bridge
* posRootERC1155: ERC1155 root token address on pos bridge
* posChildERC1155: ERC1155 child token address on pos bridge
* posChildWETH : PoS Weth
* rootChainWETH: WETH deployed on root chain
* plasmaWETH : Plasma WETH
* plasmaRootERC20 : ERC20 root token deployed on plasma
* plasmaChildERC20 : ERC20 child token deployed on plasma
* plasmaRootERC721: ERC721 root token deployed on plasma
* plasmaChildERC721: ERC721 child token deployed on plasma
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
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see increase in posWETH token balance as per Eth deposited in step 4.

#### Withdraw ETH from Matic PoS back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "Ether" from the dropdowns
3. Fill up the input control with the value to transfer to back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Exit button and wait until transaction get mined.
7. Your selected account Ether balance will increase after transaction is mined.

#### Transfer ERC20 token from Ethereum network to Matic PoS
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC20" from the dropdowns
3. Fill up the input control with the ERC20 tokens to transfer to PoS Bridge.
4. Click on Deposit and You will see two MetaMask popups back to back for approving and transferring. Select "Confirm" on MetaMask popups.
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see increase in posChildERC20 token balance as per ERC20 tokens deposited in step 4.

#### Withdraw ERC20 from Matic PoS back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC20" from the dropdowns
3. Fill up the input control with the value to transfer ERC20 token back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Exit button and wait until transaction get mined.
7. Your selected account's posRootERC20 token balance will increase after transaction is mined.

#### Transfer ERC721 token from Ethereum network to Matic PoS
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC721" from the dropdowns
3. Fill up the input control with the ERC721 tokenId to transfer to PoS Bridge.
4. Click on Deposit and You will see two MetaMask popups back to back for approving and transferring. Select "Confirm" on MetaMask popups.
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see the posChildERC721 token deposited in step 4.

#### Withdraw ERC721 from Matic PoS back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC721" from the dropdowns
3. Fill up the input control with the tokenId to transfer back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Exit button and wait until transaction get mined.
7. Your selected account's posRootERC721 token will be there once transaction is mined.

#### Transfer ERC1155 token from Ethereum network to Matic PoS
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC1155" from the dropdowns
3. Fill up the input control with the ERC1155 tokenId and amount to transfer to PoS Bridge.
4. Click on Deposit and You will see two MetaMask popups back to back for approving and transferring. Select "Confirm" on MetaMask popups.
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see the posChildERC1155 token deposited in step 4.

#### Withdraw ERC1155 from Matic PoS back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC1155" from the dropdowns
3. Fill up the input control with the tokenId and amount to transfer back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Exit button and wait until transaction get mined.
7. Your selected account's posRootERC1155 token will be there once transaction is mined.

### Plasma Bridge

#### Transfer ETH from Ethereum network to Matic Plasma
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Plasma" and "Ether" from the dropdowns
3. Fill up the input control with the Ether to transfer to Plasma Bridge.
4. Click on Deposit and select "Confirm" on MetaMask popup. Wait until transaction gets Mined
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see increase in plasmaWETH token balance as per Eth deposited in step 4.

#### Withdraw ETH from Matic Plasma back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Plasma" and "Ether" from the dropdowns
3. Fill up the input control with the value of Eth to transfer back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Confirm Withdraw button and wait until transaction get mined. Copy the transaction hash.
7. Fill the input control with transaction hash and click on Exit 
8. Your selected account's Ether balance will increase after transaction is mined.

#### Transfer ERC20 token from Ethereum network to Matic Plasma
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Plasma" and "ERC20" from the dropdowns
3. Fill up the input control with the tokens to transfer to Plasma Bridge.
4. Click on Deposit and select "Confirm" on MetaMask popup. Wait until transaction gets Mined
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see increase in plasmaChildERC20 token balance as per tokens deposited in step 4.

#### Withdraw ERC20 from Matic Plasma back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Plasma" and "ERC20" from the dropdowns
3. Fill up the input control with the value of tokens to transfer back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Confirm Withdraw button and wait until transaction get mined. Copy the transaction hash.
7. Fill the input control with transaction hash and click on Exit 
8. Your selected account's plasmaRootERC20 token balance will increase after transaction is mined.

#### Transfer ERC721 token from Ethereum network to Matic Plasma
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Plasma" and "ERC721" from the dropdowns
3. Fill up the input control with the tokenId to transfer to Plasma Bridge.
4. Click on Deposit and select "Confirm" on MetaMask popup. Wait until transaction gets Mined
5. Change the network on MetaMask to "Matic Mumbai Testnet". Add plasmaChildERC721 token. You should be able to see plasmaChildERC721 token deposited in step 4.

#### Withdraw ERC721 from Matic Plasma back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Plasma" and "ERC721" from the dropdowns
3. Fill up the input control with the tokenId to transfer back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Confirm Withdraw button and wait until transaction get mined. Copy the transaction hash.
7. Fill the input control with transaction hash and click on Exit 
8. Your selected account's plasmaRootERC721 token will be available once transaction is mined.

Recommended Resources
* [Deposit and Checkpoint Event Tracking - PoS](https://docs.matic.network/docs/develop/ethereum-matic/pos/deposit-withdraw-event-pos/)
