require("dotenv").config();
const axios = require("axios").default;
const BN = require("bignumber.js");

const eoa = "0xe7804c37c13166fF0b37F5aE0BB07A3aEbb6e245";
axios({
  method: "get",
  url: `https://api.polygonscan.com/api?module=account&action=balance&address=${eoa}&tag=latest&apikey=${process.env.POLYGONSCAN_API_KEY}`,
  responseType: "json",
}).then(function (response) {
  if (response.data.message == "OK") {
    const balanceInMATIC = new BN(response.data.result).div(new BN(10).pow(new BN(18)));
    console.log(`The balance of ${eoa} is ${balanceInMATIC} MATIC`);
  }
});
