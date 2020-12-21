const { Router } = require('express');
const usersRouter = Router();
const User = require('');

// controller
const {
  create,
  read_all,
  read_one,
  update_one,
  update_all,
  delete_one,
  delete_all
} = require('');

// middleware
const handleQuery = require('');
const { validationRules, validate } = require('');

usersRouter
  .route('/')
  .get(handleQuery(User), read_all)
  .post(validationRules('createUser'), validate, create)
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
