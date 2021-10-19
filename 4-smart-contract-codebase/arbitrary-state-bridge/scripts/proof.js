require("dotenv").config();
async function main() {
  const maticPOSClient = new require("@maticnetwork/maticjs").MaticPOSClient({
    maticProvider: "https://matic-mumbai.chainstacklabs.com", // replace if using mainnet
    parentProvider: process.env.GOERLI_RPC_URL, // replace if using mainnet
  });

  const proof = maticPOSClient.posRootChainManager.customPayload(
    "0x085f785be05aee9926974d3c6a11c398a0a224c81b63dde9065b70080f73b763", // replace with txn hash of sendMessageToRoot
    "0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036" // SEND_MESSAGE_EVENT_SIG, do not change
  );
  return proof;
}

main()
  .then((result) => {
    console.log(result);
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
