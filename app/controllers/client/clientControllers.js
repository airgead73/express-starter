const asyncHandler = require('../../middleware/handleAsync');

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
      title: 'express starter'
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
      title: 'projects'
    });

});

/**
 * @route   GET /:page
 * @desc    view pages
 * @access  private
 */

exports.pages = asyncHandler(async function(req, res, next) {

  const { page } = req.params;

  return res
    .status(200)
    .render(`pages/${page}`, {
      success: true,
      title: page
    });

});