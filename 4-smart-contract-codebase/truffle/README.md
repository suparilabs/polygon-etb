## Deploying Smart contracts to Polygon using Truffle

### Getting started
* create an empty directory
* run `yarn -y init`
* run `yarn add -D truffle dotenv @truffle/hdwallet-provider`
* run `npx truffle unbox metacoin`
* Create `.env` file from `env.example` and add your mnemonic.


### Smart contract deployment and Interaction using truffle console

* run  `npx truffle console --network polygon`

```console
truffle(polygon)> migrate
truffle(polygon)> instance = await MetaCoin.deployed()
truffle(polygon)> account1 = web3.eth.getAccounts()[0]
truffle(polygon)> account2 = web3.eth.getAccounts()[1]
truffle(polygon)> instance.getBalance(account1)
truffle(polygon)> instance.getBalanceInEth(account1)
truffle(polygon)> instance.getBalance(account2)
truffle(polygon)> instance.sendCoin(account2,"2500")
truffle(polygon)> instance.getBalance(account2)
truffle(polygon)> instance.getBalanceInEth(account2)
truffle(polygon)> instance.getBalance(account1)
```
