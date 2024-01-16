const port = 3000;
const express = require('express');
const routers = require('../routers');
require('dotenv').config();

console.log('process.env.PROXY_HOST', process.env.PROXY_HOST);

const app = express();

app.use(routers);

app.listen(port);
console.log('Gateway is running on port ' + port);

app.on('error', function (err) {
  console.log(err.stack);
});
