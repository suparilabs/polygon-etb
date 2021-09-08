const bn = require('bignumber.js')
const { getMaticPOSClient, from, pos, SCALING_FACTOR } = require("./utils");

const execute = async () => {
  try {
    const maticPOSClient = getMaticPOSClient();
    const balance = await maticPOSClient.balanceOfERC20(
      from,
      pos.child.erc20,
      {}
    );
    const balanceInToken = new bn(balance).div(SCALING_FACTOR);
    console.log(`Balance of ${from} on PoS bridge is ${balanceInToken} DERC20`);
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};
execute().then(() => process.exit(0));
