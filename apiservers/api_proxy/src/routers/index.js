const express = require('express');
const mainRouter = express.Router();
const cscqs01Router = require('./cscqs01.router');
const notFoundRouter = require('./notFound.router');

const apiRouters = [
  ['/cscqs01', cscqs01Router],
  ['/*', notFoundRouter],
];

apiRouters.forEach(([path, router]) => mainRouter.use(path, router));

module.exports = mainRouter;
