const asyncHandler = require('../../middleware/handleAsync');
const User = require('../../models/User');
const createError = require('http-errors');

/**
 * @route   POST /
 * @desc    create user
 * @access  private
 */

exports.create = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'POST: create user' 
    });

});

 /**
 * @route   GET /
 * @desc    read all users
 * @access  private
 */

exports.read_all = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'GET: read users' 
    });  

}); 

/**
 * @route   GET /:userID
 * @desc    read one user
 * @access  private
 */

exports.read_one = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'GET: read one user' 
    });  

}); 

/**
 * @route   PUT /:userID
 * @desc    update one user
 * @access  private
 */ 

exports.update_one = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'PUT: update one user' 
    });  

}); 

/**
 * @route   DELETE /
 * @desc    delete one user
 * @access  private
 */ 

exports.delete_one = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'DELETE: delete user' 
    });  

}); 

/**
 * @route   PUT /
 * @desc    update many users
 * @access  private
 */ 

exports.update_all = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'PUT: update many users' 
    });  

}); 

/**
 * @route   DELETE /
 * @desc    drop user collection
 * @access  private
 */

exports.delete_all= asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'DELETE: delete user collection' 
    });  

}); 

