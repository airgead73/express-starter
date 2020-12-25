const { Router } = require('express');
const projectsRouter = Router();

// models
const Project = require('../../_models/Project');

// controllers
const {
  projects_get,
  projects_detail,
  projects_add
} = require('./controllers.projects');

// middleware
const handleQuery = require('../middleware/handleQuery');

// options
const populate = [{ path: 'items', select: 'title' }];

projectsRouter
  .route('/')
  .get(handleQuery(Project, populate), projects_get);

projectsRouter
  .route('/add') 
  .get(projects_add); 

projectsRouter
  .route('/:projectID')
  .get(projects_detail);  

module.exports = {
  projectsRouter
}

