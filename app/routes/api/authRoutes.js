const express = require('express');
const router = express.Router();

const { validationRules, validate } = require('../../middleware/handleValidation');
const auth_controller = require('../../controllers/api/projectController');

router
  .route('/signin')
  .post(
    validationRules('signinUser'),
    validate,
    auth_controller.signin
  );

router
  .route('/signout')
  .get(auth_controller.signout)

module.exports = router;