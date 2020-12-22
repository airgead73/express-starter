const asyncHandler = require('../middleware/handleAsync');
const { configureLinks } = require('../../config/nav');
const Project = require('../../_models/Project');

 /**
 * @route   GET /
 * @desc    read all projects
 * @access  private
 */

exports.projects_get = asyncHandler(async function(req, res, next) {

  const { success, count, data } = res.results;

  return res
    .status(200)
    .render('pages/projects/index', {
      success: success,
      title: 'projects',
      links: configureLinks('projects'),
      count: count,
      projects: data,

    });

});

 /**
 * @route   GET /:projectID
 * @desc    read all projects
 * @access  private
 */

exports.projects_detail = asyncHandler(async function(req, res, next) {

  const project = await Project.findById(req.params.projectID)

  return res
    .status(200)
    .render('pages/projects/detail', {
      success: success,
      title: 'projects',
      links: configureLinks('projects'),
      project

    });

});