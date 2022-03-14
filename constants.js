const https = require("https");
const axios = require("axios");

const vrdAPIUrl =
  "https://data.tc.gc.ca/v1.3/api/eng/vehicle-recall-database/recall-summary/recall-number/<recallNumber>?format=json";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

axios.defaults.httpsAgent = httpsAgent;

module.exports = { axios, vrdAPIUrl };
