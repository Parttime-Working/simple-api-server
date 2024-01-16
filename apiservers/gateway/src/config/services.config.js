require('dotenv').config();

const config = {
  apiProxy: {
    host: process.env.PROXY_HOST,
  },
};

module.exports = config;
