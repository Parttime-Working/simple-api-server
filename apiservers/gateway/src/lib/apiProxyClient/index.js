const axios = require('axios');
const config = require('../../config/services.config');

const proxyClient = axios.create({
  baseURL: config.apiProxy.host,
});

module.exports = proxyClient;
