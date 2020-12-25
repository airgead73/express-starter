const jwt = require('jsonwebtoken');
const User = require('../../_models/User');
const { JWT_SECRET } = require('../../config/env');

const requireAuth = (req, res, next) => {

  if(req.path === '/login') {
    return next()
  }

  const token = req.cookies.jwt;

  // check if token exists

  if(token) {

    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {

      if(err) {
        console.log(err.message);
        return res.redirect('/login');
      } else {
        return next();
      }

    });
    
  } else {
    return res.redirect('/login')
  }

}


const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  // check if token exists

  if(token) {

    jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {

      if(err) {
        console.log(err.message);
        res.locals.user = null;
        return next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        return next();
      }

    });
    
  } else {
    res.locals.user = null;
    next();    
  }  
}

module.exports = { requireAuth, checkUser };