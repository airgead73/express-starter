const { Router } = require('express');
const resourcesRouter = Router({ mergeParams: true });
const Resource = require('');

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

// populate options
populate = [{path: 'project', select: 'title'}]

// routes

resourcesRouter
  .route('/')
  .get(handleQuery(Resource, populate), read_all)
  .post(create)
  .put(update_all)
  .delete(delete_all);

resourcesRouter
  .route('/:resourceID')
  .get(read_one)
  .put(update_one)
  .delete(delete_one);

module.exports = {
  resourcesRouter,
};