const { Router } = require('express');
const itemsRouter = Router({ mergeParams: true });
const {
  create,
  read_all,
  read_one,
  update_one,
  update_all,
  delete_one,
  delete_all
} = require('../controllers/api.controllers.items');

itemsRouter
  .route('/')
  .get(read_all)
  .post(create)
  .put(update_all)
  .delete(delete_all);

itemsRouter
  .route('/:itemID')
  .get(read_one)
  .put(update_one)
  .delete(delete_one);

module.exports = {
  itemsRouter,
};