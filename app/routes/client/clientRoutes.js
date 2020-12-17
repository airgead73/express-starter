const express = require('express');
const router = express.Router();

const client_controller = require('../../controllers/client/clientControllers');

router.route('/').get(client_controller.landing);
router.route('/projects').get(client_controller.projects);
router.route('/:page').get(client_controller.pages);

module.exports;