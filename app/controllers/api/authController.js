const asyncHandler = require('../../middleware/handleAsync');
const { JWT_COOKIE_EXP, ISDEV } = require('../../config/env');

/**
 * @route   POST api/auth
 * @desc    Signin user
 * @access  public
 */

exports.signin = asyncHandler(async function(req, res, next) {

  if(
    res.locals.validation_fail ||
    res.locals.authorization_fail
  ) {
    return res
      .status(400)
      .json({
        status: false,
        msg: res.locals.error_arrr
      });
  }

  sendTokenResponse(res.locals.checked_user, 200, res);

});

/**
 * @route   GET api/auth
 * @desc    Signout user
 * @access  public
 */

exports.signout = asyncHandler(async function(req, res, next) {

  const options = {
    expires: new Date(Date.now() + 10),
    httpOnly: true,
    secure: ISDEV ? false : true    
  }

  res
    .cookie('token', 'none', options)
    .status(200)
    .json({
      success: true,
      msg: 'User signed out'
    });   

});

const sendTokenResponse = (user, statusCode, res) => {

  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(Date.now() + JWT_COOKIE_EXP * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: ISDEV ? false : true
  }

  return res  
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      msg: 'User signed in',
      token: token
    });

}