const asyncHandler = require('../../middleware/handleAsync');
const { configureLinks } = require('../../config/nav');

/**
 * @route   GET /
 * @desc    view landing page
 * @access  private
 */

exports.landing = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .render('pages/index', {
      success: true,
      title: 'express starter',
      links: configureLinks('landing')
    });

});

/**
 * @route   GET /about
 * @desc    view about
 * @access  private
 */

exports.about = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .render('pages/about', {
      success: true,
      title: 'about',
      links: configureLinks('about')
    });

});


/**
 * @route   GET /contact
 * @desc    view contact
 * @access  private
 */

exports.contact = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .render('pages/contact', {
      success: true,
      title: 'contact',
      links: configureLinks('contact')
    });

});


/**
 * @route   GET /profile
 * @desc    view profile
 * @access  private
 */

exports.profile = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .render('pages/profile', {
      success: true,
      title: 'profile',
      links: configureLinks('profile')
    });

});


/**
 * @route   GET /signin
 * @desc    view signin
 * @access  public
 */

exports.signin = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .render('pages/signin', {
      success: true,
      title: 'signin',
      links: configureLinks('signin')
    });

});



