const express = require('express');
const mainRouter = express.Router();
const apiProxyService = require('./apiProxyService.router');
const notFoundRouter = require('./notFound.router');

// test
// const testRouter = express.Router();

const apiRouters = {
  // '/test': testRouter.get('', (req, res) => {
  //   res.send('test');
  // }),
  '/api_proxy': apiProxyService,
  '/*': notFoundRouter,
};

Object.entries(apiRouters).forEach(([path, router]) =>
  mainRouter.use(path, router),
);

module.exports = mainRouter;
