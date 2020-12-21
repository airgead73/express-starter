const asyncHandler = require('../../middleware/handleAsync');
//const Item = require('../../models/item');
const createError = require('http-errors');

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
 * @desc    read all items
 * @access  private
 */

exports.read_all = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'GET: read items' 
    });  

}); 

/**
 * @route   GET /:itemID
 * @desc    read one item
 * @access  private
 */

exports.read_one = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'GET: read one item' 
    });  

}); 

/**
 * @route   PUT /:itemID
 * @desc    update one item
 * @access  private
 */ 

exports.update_one = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'PUT: update one item' 
    });  

}); 

/**
 * @route   DELETE /
 * @desc    delete one item
 * @access  private
 */ 

exports.delete_one = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'DELETE: delete item' 
    });  

}); 

/**
 * @route   PUT /
 * @desc    update many items
 * @access  private
 */ 

exports.update_all = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'PUT: update many items' 
    });  

}); 

/**
 * @route   DELETE /
 * @desc    drop item collection
 * @access  private
 */

exports.delete_all= asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'DELETE: delete item collection' 
    });  

}); 

