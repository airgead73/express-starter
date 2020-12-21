const { Router } = require('express');
const { usersRouter } = require('./api_routes/api.routes.users');
const { projectsRouter } = require('./api_routes/api.routes.projects');
const { itemsRouter } = require('./api_routes/api.routes.items');
const { resourcesRouter } = require('./api_routes/api.routes.resources');
const { templatesRouter } = require('./api_routes/api.routes.templates');
const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/projects', projectsRouter);
apiRouter.use('/items', itemsRouter);
apiRouter.use('/resources', resourcesRouter);
apiRouter.use('/templates', templatesRouter);

module.exports = {
  apiRouter,
};