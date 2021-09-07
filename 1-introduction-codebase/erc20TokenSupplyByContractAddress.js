require("dotenv").config();
const axios = require("axios").default;
const BN = require("bignumber.js");

const contractAddress = "0x2791bca1f2de4661ed88a30c99a7a9449aa84174"; // USDC Coin (PoS)

axios({
  method: "get",
  url: `https://api.polygonscan.com/api?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${process.env.POLYGONSCAN_API_KEY}`,
  responseType: "json",
}).then(function (response) {
  if (response.data.message == "OK") {
    const balanceInUSDC = new BN(response.data.result).div(new BN(10).pow(new BN(6)));
    console.log(
      `The token supply of contract ${contractAddress} is ${balanceInUSDC} USDC`
    );
  }
});