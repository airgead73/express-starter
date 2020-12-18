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

exports.contact = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .render('pages/contact', {
      success: true,
      title: 'contact',
      links: configureLinks('contact')
    });

});

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
 * @route   GET /projects
 * @desc    view projects page
 * @access  private
 */

exports.projects = asyncHandler(async function(req, res, next) {   

  return res
    .status(200)
    .render('pages/projects/index', {
      success: true,
      title: 'projects',
      links: configureLinks('projects')
    });

});

