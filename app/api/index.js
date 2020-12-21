const { Router } = require('express');
const { usersRouter } = require('./routes/api.routes.users');
const { projectsRouter } = require('./routes/api.routes.projects');
const { itemsRouter } = require('./routes/api.routes.items');
const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/projects', projectsRouter);
apiRouter.use('/items', itemsRouter);

module.exports = {
  apiRouter,
};