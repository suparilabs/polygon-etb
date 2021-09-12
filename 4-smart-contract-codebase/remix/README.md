## Deploying Smart contracts to Polygon using Remix

### Getting started
* create an empty directory
* run `yarn -y init`
* run `yarn add -D @remix-project/remixd@latest`
* run `npx remixd -s /absolute/path/to/project/directory --remix-ide https://remix-alpha.ethereum.org/` 
* Go to https://remix-alpha.ethereum.org
* Choose **localhost** from workspaces dropdown and click on **Connect**
* You should be able to the project folder in the remix file explorer panel
* Open `contracts/Greeting.sol`
* Compile contract with correct compiler version using the compiler plugin
* Switch the Network in your MetaMask to Mumbai Matic testnet
* Choose the `Injected web3` environment using Deploy plugin and allow Remix to access MetaMask wallet.
* Click on Deploy button. 
* Now under the Deployed contract section, you can see all public methods of Greeter contracts are available as buttons. Use them to interact with Greeter contract.
* You can keep watching the Remix console for the logs. 