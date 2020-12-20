const express = require('express');
const router = express.Router();

const template_controller = require('../../controllers/api/templateController');

router
  .route('/')
  .get(template_controller.read)
  .post(template_controller.create)
  .delete(template_controller.drop);

router
  .route('/:templateID')
  .get(template_controller.detail)
  .put(template_controller.update)
  .delete(template_controller.delete);

module.exports = router;