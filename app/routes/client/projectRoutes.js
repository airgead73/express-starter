const express = require('express');
const router = express.Router();

const project_controller = require('../../controllers/client/projectController');

router.route('/').get(project_controller.projects);
router.route('/:projectID').get(project_controller.detail);

module.exports = router;