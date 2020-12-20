const asyncHandler = require('../../middleware/handleAsync');
const { configureLinks } = require('../../config/nav');

/**
 * @route   GET /users
 * @desc    view users page
 * @access  private
 */

exports.users = asyncHandler(async function(req, res, next) {   

  return res
    .status(200)
    .render('pages/users/index', {
      success: true,
      title: 'users',
      links: configureLinks('users')
    });

});

/**
 * @route   GET /users/:projectID
 * @desc    view users page
 * @access  private
 */

exports.detail = asyncHandler(async function(req, res, next) {   

  const user = req.params.userID

  return res
    .status(200)
    .render('pages/users/detail', {
      success: true,
      title: user,
      links: configureLinks(user)
    });

});