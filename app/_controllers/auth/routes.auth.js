const { Router } = require('express');
const accessRouter = Router();
const {
  get_signup,
  post_signup,
  get_login,
  post_login
} = require('./controllers.auth');

accessRouter
  .route('/signup')
  .get(get_signup)
  .post(post_signup);

accessRouter
  .route('/login')
  .get(get_login)
  .post(post_login);  

  module.exports = {
    accessRouter,
  };  