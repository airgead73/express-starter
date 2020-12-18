const asyncHandler = require('../../middleware/handleAsync');
const { configureLinks } = require('../../config/nav');

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

/**
 * @route   GET /projects/:projectID
 * @desc    view projects page
 * @access  private
 */

exports.detail = asyncHandler(async function(req, res, next) {   

  const project = req.params.projectID

  return res
    .status(200)
    .render('pages/projects/detail', {
      success: true,
      title: project,
      links: configureLinks(project)
    });

});