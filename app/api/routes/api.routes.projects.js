const { Router } = require('express');
const projectsRouter = Router();

projectsRouter
  .route('/')
  .get((req, res) => res.json({ success: true, msg: 'GET: get projects' }))
  .post((req, res) => res.json({ success: true, msg: 'POST: create a project' }))
  .put((req, res) => res.json({ success: true, msg: 'PUT: update all projects' }))
  .delete((req, res) => res.json({ success: true, msg: 'DROP: delete all projects' }));

projectsRouter
  .route('/:projectID')
  .get((req, res) => res.json({ success: true, msg: 'GET: get one project' }))
  .put((req, res) => res.json({ success: true, msg: 'PUT: update one project' }))
  .delete((req, res) => res.json({ success: true, msg: 'DELETE: delete one project' }));

module.exports = {
  projectsRouter,
};