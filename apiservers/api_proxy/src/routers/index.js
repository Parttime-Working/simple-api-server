const express = require('express');
const mainRouter = express.Router();
const cscqs01Router = require('./cscqs01.router');
const notFoundRouter = require('./notFound.router');

const apiRouters = {
  cscqs01Router,
  notFoundRouter,
};

Object.values(apiRouters).forEach((router) => mainRouter.use(router));

// router.use("/cscqs01", cscqs01Router)

module.exports = mainRouter;
