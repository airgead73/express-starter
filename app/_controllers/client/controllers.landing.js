const asyncHandler = require('../middleware/handleAsync');
const createError = require('http-errors');
const { configureLinks } = require('../../config/nav')

/**
 * @route   GET /
 * @desc    view landing
 * @access  private
 */

exports.landing = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .render('pages/index', {
      success: true,
      title: 'exress starter',
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

/**
 * @route   GET /contact
 * @desc    view contact
 * @access  private
 */ 

exports.contact = asyncHandler(async function(req, res, next) {

  return res
    .status(200)
    .render('pages/contact', {
      success: true,
      title: 'contact',
      links: configureLinks('contact')
    });

});

/**
 * @route   GET /terms
 * @desc    view terms
 * @access  private
 */ 

exports.terms = asyncHandler(async function(req, res, next) {

  res.json({ msg: 'GET: landing page'})

});