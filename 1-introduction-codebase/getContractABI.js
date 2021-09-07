require("dotenv").config();
const axios = require("axios").default;

const contractAddress = "0x841ce48f9446c8e281d3f1444cb859b4a6d0738c";
axios({
  method: "get",
  url: `https://api.polygonscan.com/api?module=contract&action=getabi&address=${contractAddress}&apikey=${process.env.POLYGONSCAN_API_KEY}`,
  responseType: "json",
}).then(function (response) {
  if (response.data.message == "OK") {
    console.log(`The ABI of the contract ${contractAddress} is ${response.data.result}`,);
  }
});
