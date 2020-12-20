const asyncHandler = require('../../middleware/handleAsync');

/**
 * @route   POST /
 * @desc    create project
 * @access  private
 */

exports.create = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'POST: create project'
  });

});

/**
 * @route   GET /
 * @desc    read projects
 * @access  private
 */

exports.read = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'GET: read projects'
  });

});

/**
 * @route   GET /:projectID
 * @desc    read project
 * @access  private
 */

exports.detail = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'GET: read one project'
  });

});

/**
 * @route   PUT /:projectID
 * @desc    update project
 * @access  private
 */

exports.update = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'PUT: update project'
  });

});

/**
 * @route   DELETE /:projectID
 * @desc    create project
 * @access  private
 */

exports.delete = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'DELETE: delete projects'
  });

});

