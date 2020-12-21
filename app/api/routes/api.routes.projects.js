const { Router } = require('express');
const projectsRouter = Router();
const { itemsRouter } = require('./api.routes.items');
const { resourcesRouter } = require('./api.routes.resources');
const Project = require('../../models/Project');

// controllers
const {
  create,
  read_all,
  read_one,
  update_one,
  update_all,
  delete_one,
  delete_all
} = require('../controllers/api.controllers.projects');

// middleware
const handleQuery = require('../../middleware/handleQuery');

// populate options
populate = [{path: 'items', select: 'title'}]

// nested routes
projectsRouter.use('/:projectID/items', itemsRouter);
projectsRouter.use('/:projectID/resources', resourcesRouter);

// routes
projectsRouter
  .route('/')
  .get(handleQuery(Project, populate), read_all)
  .post(create)
  .put(update_all)
  .delete(delete_all);

projectsRouter
  .route('/:projectID')
  .get(read_one)
  .put(update_one)
  .delete(delete_one);

module.exports = {
  projectsRouter,
};