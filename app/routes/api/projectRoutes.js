const express = require('express');
const router = express.Router();

const project_controller = require('../../controllers/api/projectController');

router
  .route('/')
  .post(project_controller.create)
  .get(project_controller.read);

router
  .route('/:projectID')
  .get(project_controller.detail)
  .put(project_controller.update)
  .delete(project_controller.delete);

module.exports = router;