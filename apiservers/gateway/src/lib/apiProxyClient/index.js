const axios = require('axios');

console.log('process.env.PROXY_HOST', process.env.PROXY_HOST);

const proxyClient = axios.create({
  baseURL: process.env.PROXY_HOST,
});

module.exports = proxyClient;
