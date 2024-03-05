require('dotenv').config();
const express = require('express');
const routers = require('../routers');

const port = process.env.SERVICE_PORT;
const app = express();

app.use(routers);

app.listen(port);
console.log('API Proxy server is running on port ' + port);

app.on('error', function (err) {
  console.log(err.stack);
});
