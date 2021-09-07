require("dotenv").config();
const axios = require("axios").default;

const txHash = "0x88da07a53862ba8376539304b932d23fe6305d9f0144d71fc43f564a183dc422";
axios({
  method: "get",
  url: `https://api.polygonscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=${txHash}&apikey=${process.env.POLYGONSCAN_API_KEY}`,
  responseType: "json",
}).then(function (response) {
  if (response.data.message == "OK") {
    console.log(
      `The transaction receipt status of ${txHash} is ${response.data.result.status == 1 ? `success` : `fail`}`
    );
  }
});
