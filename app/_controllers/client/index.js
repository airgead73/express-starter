const { Router } = require('express');
const { landingsRouter } = require('./routes.landing');
const clientRouter = Router();

clientRouter.use(landingsRouter);

module.exports = {
  clientRouter,
}