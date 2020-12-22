const asyncHandler = require('../middleware/handleAsync');

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

  res.json({ msg: 'new signup'})

});

exports.post_login = asyncHandler(async function(req, res, next) {

  res.json({ msg: 'login user'});

});