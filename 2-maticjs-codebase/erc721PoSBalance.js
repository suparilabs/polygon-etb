const { getMaticPOSClient, from, pos } = require('./utils')

const execute = async () => {
  try {
    const maticPOSClient = getMaticPOSClient()
    const balance = await maticPOSClient.balanceOfERC721(from, pos.child.erc721, {})
    console.log(balance)
  } catch (e) {
    console.error(e)
  }
}
execute().then(() => process.exit(0))