require("dotenv").config();
async function main() {
  const maticPOSClient = new require("@maticnetwork/maticjs").MaticPOSClient({
    maticProvider: "https://matic-mumbai.chainstacklabs.com", // replace if using mainnet
    parentProvider: process.env.GOERLI_RPC_URL, // replace if using mainnet
  });
  const proof = maticPOSClient.posRootChainManager.customPayload(
    "0xc456f995e2c330d4d653c37bf84f705541037464a861498bad8ef15c7f0c5c6a", // replace with txn hash of sendMessageToRoot
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
