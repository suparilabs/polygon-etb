## Deploying Smart contracts to Polygon

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
