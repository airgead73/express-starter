const asyncHandler = require('../../middleware/handleAsync');
const User = require('../../models/User');
const createError = require('http-errors');

/**
 * @route   POST /
 * @desc    create user
 * @access  private
 */

exports.create = asyncHandler(async function(req, res, next) {

  if(res.locals.validation_fail) {
    return res
    .status(404)
    .json({
      success: false,
      messages: res.locals.error_arr
    });    
  }

  const user = new User(req.body);

  await user.save();

  // Create token
  const token = user.getSignedJwtToken();

  return res
    .status(200)
    .json({
      success: true,
      msg: 'POST: create user',
      user: {
        name: user.name,
        email: user.email,
      },
      token

  });

});

/**
 * @route   GET /
 * @desc    read users
 * @access  private
 */

exports.read = asyncHandler(async function(req, res, next) {

  const users = await User.find().sort({ createdAt: -1 });

  return res
    .status(200)
    .json({
      success: true,
      msg: users.length ? `GET: ${users.length} found` : 'No users found',
      count: users.length,
      users
  });

});

/**
 * @route   GET /:userID
 * @desc    read user
 * @access  private
 */

exports.detail = asyncHandler(async function(req, res, next) {

  const user = await User.findById(req.params.userID);

  if(!user) {
    return next(createError(404, 'User not found'))
  }

  return res
    .status(200)
    .json({
      success: true,
      msg: 'GET: read one user',
      user
  });

});

/**
 * @route   GET /auth/user
 * @desc    get current user
 * @access  private
 */

exports.current = asyncHandler(async function(req, res, next) {

  res
  .status(200)
  .json({
    success: true,
    msg: 'Read current user',
    user: res.locals.checked_user
  });

})

/**
 * @route   PUT /:userID
 * @desc    update user
 * @access  private
 */

exports.update = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'PUT: update user'
  });

});

/**
 * @route   DELETE /:userID
 * @desc    delete project
 * @access  private
 */

exports.delete = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'DELETE: delete users'
  });

});

/**
 * @route   DELETE /users
 * @desc    delete users collection
 * @access  private
 */

exports.drop = asyncHandler(async function(req, res, next) {

  User.collection.drop();

  return res
    .status(200)
    .json({
      success: true,
      msg: 'DELETE: users collection dropped'
  });

});





