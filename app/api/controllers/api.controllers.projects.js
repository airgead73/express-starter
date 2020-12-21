const asyncHandler = require('../../middleware/handleAsync');
//const Project = require('../../models/project');
const createError = require('http-errors');

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
 * @desc    read all projects
 * @access  private
 */

exports.read_all = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'GET: read projects' 
    });  

}); 

/**
 * @route   GET /:projectID
 * @desc    read one project
 * @access  private
 */

exports.read_one = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'GET: read one project' 
    });  

}); 

/**
 * @route   PUT /:projectID
 * @desc    update one project
 * @access  private
 */ 

exports.update_one = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'PUT: update one project' 
    });  

}); 

/**
 * @route   DELETE /
 * @desc    delete one project
 * @access  private
 */ 

exports.delete_one = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'DELETE: delete project' 
    });  

}); 

/**
 * @route   PUT /
 * @desc    update many projects
 * @access  private
 */ 

exports.update_all = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'PUT: update many projects' 
    });  

}); 

/**
 * @route   DELETE /
 * @desc    drop project collection
 * @access  private
 */

exports.delete_all= asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'DELETE: delete project collection' 
    });  

}); 

