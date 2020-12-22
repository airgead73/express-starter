const asyncHandler = require('../middleware/handleAsync');
const createError = require('http-errors');

/**
 * @route   GET /
 * @desc    view landing
 * @access  private
 */

exports.landing = asyncHandler(async function(req, res, next) {

  res.json({ msg: 'GET: landing page'})

});

/**
 * @route   GET /about
 * @desc    view about
 * @access  private
 */

exports.about = asyncHandler(async function(req, res, next) {

  res.json({ msg: 'GET: landing page'})

});

/**
 * @route   GET /contact
 * @desc    view contact
 * @access  private
 */ 

exports.contact = asyncHandler(async function(req, res, next) {

  res.json({ msg: 'GET: landing page'})

});

/**
 * @route   GET /terms
 * @desc    view terms
 * @access  private
 */ 

exports.terms = asyncHandler(async function(req, res, next) {

  res.json({ msg: 'GET: landing page'})

});