const express = require('express');
const mainRouter = express.Router();
const apiProxyService = require('./apiProxyService.router');
const notFoundRouter = require('./notFound.router');

const apiRouters = {
  '/api_proxy': apiProxyService,
  '/*': notFoundRouter,
};

Object.entries(apiRouters).forEach(([path, router]) =>
  mainRouter.use(path, router),
);

module.exports = mainRouter;
