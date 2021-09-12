## Deploying Smart contracts to Polygon using Hardhat

### Getting started
* create an empty directory
* run `yarn -y init`
* run `yarn add -D hardhat dotenv @nomiclabs/hardhat-ethers ethers`
* run `npx hardhat init`
* Create `.env` file from `env.example` and add your private key.


### Deploy the smart contract on Polygon
* `npx hardhat run scripts/deploy.js --network polygon`


### Interact the smart contract on Polygon
* `npx hardhat run scripts/deploy.js --network polygon`


### Deploy and interact with smart contract using hardhat console

* run `npx hardhat console --network polygon`

```console
> factory = await hre.ethers.getContractFactory("Greeeter")
> await factory.deploy("Hello World!")
> greeter = await hre.ethers.getContractAt("Greeter","<greeter-contract-address>")
> await greeter.greet()
> await greeter.setGreeting("Eat the blocks")
> await greeter.greet()
```