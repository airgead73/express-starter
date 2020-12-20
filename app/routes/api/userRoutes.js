const express = require('express');
const router = express.Router();

const user_controller = require('../../controllers/api/userController');
const { validationRules, validate } = require('../../middleware/handleValidation');

router
  .route('/')
  .get(user_controller.read)
  .post(validationRules('createUser'), validate, user_controller.create)
  .delete(user_controller.drop);

router
  .route('/:userID')
  .get(user_controller.detail)
  .put(user_controller.update)
  .delete(user_controller.delete);

module.exports = router;