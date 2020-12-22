const { Router } = require('express');
const { landingsRouter } = require('./routes.landing');
const { projectsRouter } = require('./routes.projects');
const clientRouter = Router();

clientRouter.use('/', landingsRouter);
clientRouter.use('/projects', projectsRouter);

module.exports = {
  clientRouter,
}