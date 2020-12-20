const express = require('express');
const router = express.Router();

const { validationRules, validate } = require('../../middleware/handleValidation');
const checkUser = require('../../middleware/checkUser');
const auth_controller = require('../../controllers/api/authController');
const user_controller = require('../../controllers/api/userController');

router
  .route('/signin')
  .post(
    validationRules('signinUser'),
    validate,
    checkUser,
    auth_controller.signin
  );

router
  .route('/signout')
  .get(auth_controller.signout);

router
  .route('/current')
  .get(checkUser, user_controller.current);

module.exports = router;