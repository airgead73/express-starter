const asyncHandler = require('../../middleware/handleAsync');

/**
 * @route   POST /
 * @desc    create item
 * @access  private
 */

exports.create = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'POST: create item'
  });

});

/**
 * @route   GET /
 * @desc    read items
 * @access  private
 */

exports.read = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'GET: read items'
  });

});

/**
 * @route   GET /:itemID
 * @desc    read item
 * @access  private
 */

exports.detail = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'GET: read one item'
  });

});

/**
 * @route   PUT /:itemID
 * @desc    update item
 * @access  private
 */

exports.update = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'PUT: update item'
  });

});

/**
 * @route   DELETE /:itemID
 * @desc    create project
 * @access  private
 */

exports.delete = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'DELETE: delete items'
  });

});

