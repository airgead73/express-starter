const asyncHandler = require('../middleware/handleAsync');
const User = require('../../_models/User');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, ISDEV } = require('../../config/env');

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: maxAge
  });
}

/**
 * @route   GET /
 * @desc    view signup page
 * @access  private
 */

exports.get_signup = asyncHandler(async function(req, res, next) {  

  return res
    .status(200)
    .render('pages/signup', {
      success: true,
      title: 'signup',
      scripts: {
        signup: true
      }
    });

});

exports.get_login = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .render('pages/login', {
      success: true,
      title: 'login',
      scripts: {
        login: true
      }
    });

});

exports.get_logout = asyncHandler(async function(req, res, next) {

  res.cookie('jwt', '', { maxAge: 1});
  res.redirect('/login');

});

exports.post_signup = asyncHandler(async function(req, res, next) {

  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password});

  return res
    .status(201)
    .json({
      success: true,
      user: user._id
    });

});

exports.post_login = asyncHandler(async function(req, res, next) {

  const { email, password } = req.body;

  const user = await User.login({email, password}, res);

  const token = createToken(user._id);
  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: maxAge * 1000,
    secure: ISDEV ? false : true
  });

  return res
    .status(200)
    .json({
      success: true, 
      user: user._id 
    });  

});