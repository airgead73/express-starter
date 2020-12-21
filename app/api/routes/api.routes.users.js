const { Router } = require('express');
const usersRouter = Router();
const {
  create,
  read_all,
  read_one,
  update_one,
  update_all,
  delete_one,
  delete_all
} = require('../controllers/api.controllers.users');

usersRouter
  .route('/')
  .get(read_all)
  .post(create)
  .put(update_all)
  .delete(delete_all);

usersRouter
  .route('/:userID')
  .get(read_one)
  .put(update_one)
  .delete(delete_one);

module.exports = {
  usersRouter,
};
