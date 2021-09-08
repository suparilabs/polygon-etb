const bn = require('bignumber.js')
const { getMaticPlasmaClient, from,to, plasma,SCALING_FACTOR } = require('./utils')

const execute = async () => {
  const { matic } = await getMaticPlasmaClient()
  const balance = await matic.balanceOfERC20(from, plasma.child.erc20, {})
  const balanceInToken = new bn(balance).div(SCALING_FACTOR)
  console.log(`Balance of ${from} on Plasma bridge is ${balanceInToken} TST`)
}

execute().then(_ => {
  process.exit(0)
})