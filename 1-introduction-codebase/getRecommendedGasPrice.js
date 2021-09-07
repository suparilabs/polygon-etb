const axios = require("axios").default;

axios({
  method: "get",
  url: 'https://gasstation-mainnet.matic.network',
  responseType: "json",
}).then(function (response) {
  if (response.status == 200) {
    console.log("The recommended gas price is : \n", response.data );
  }
});