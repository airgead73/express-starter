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
    });

});

exports.get_login = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .render('pages/login', {
      success: true,
      title: 'login',
    });

});

exports.post_signup = asyncHandler(async function(req, res, next) {

  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password});

  const token = createToken(user._id);
  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: maxAge * 1000,
    secure: ISDEV ? false : true
  });

  console.log(user);

  return res
    .status(201)
    .json({
      success: true,
      user: user._id
    });

});

exports.post_login = asyncHandler(async function(req, res, next) {

  const { email, password } = req.body;

  const user = await User.login(email, password);

  

  return res
    .status(200)
    .json({ email, password });



});