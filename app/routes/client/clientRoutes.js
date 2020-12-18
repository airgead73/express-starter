const express = require('express');
const router = express.Router();

const client_controller = require('../../controllers/client/clientControllers');

router.route('/').get(client_controller.landing);
router.route('/projects').get(client_controller.projects);
router.route('/about').get(client_controller.about);
router.route('/contact').get(client_controller.contact);
router.route('/profile').get(client_controller.profile);

module.exports = router;