const express = require('express');
const router = express.Router();

const user_controller = require('../../controllers/client/userController');

router.route('/').get(user_controller.users);
router.route('/:userID').get(user_controller.detail);

module.exports = router;