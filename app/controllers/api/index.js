const { Router } = require('express');
const { usersRouter } = require('./routes/api.routes.users');
const { projectsRouter } = require('./routes/api.routes.projects');
const { itemsRouter } = require('./routes/api.routes.items');
const { resourcesRouter } = require('./routes/api.routes.resources');
const { templatesRouter } = require('./routes/api.routes.templates');
const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/projects', projectsRouter);
apiRouter.use('/items', itemsRouter);
apiRouter.use('/resources', resourcesRouter);
apiRouter.use('/templates', templatesRouter);

module.exports = {
  apiRouter,
};