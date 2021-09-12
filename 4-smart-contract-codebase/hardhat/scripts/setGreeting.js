// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract
  const contractAddress = "0x04Ef8a8d3B198749582896F3Bb133ACCc989bD78";
  const Greeter = await hre.ethers.getContractAt("Greeter", contractAddress);
  const tx = await Greeter.setGreeting("Eat the Blocks");

  await tx.wait();

  const greeting = await Greeter.greet();

  console.log("Greeting :", greeting);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
