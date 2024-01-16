const port = 3001;
const express = require('express');
const routers = require('../routers');
require('dotenv').config();

const app = express();

app.use(routers);

app.listen(port);
console.log('API Proxy server is running on port ' + port);

app.on('error', function (err) {
  console.log(err.stack);
});
