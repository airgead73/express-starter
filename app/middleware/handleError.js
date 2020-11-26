const { ISDEV } = require('../config/config');

const handleError = async function(err, req, res, next) {

  const json = res.locals.res_json;
  const html = res.locals.res_html;

  if(ISDEV) {
    console.log('****************************');
    console.error({
      name: err.name,
      status: err.status,
      msg: err.message
    });
    console.log('****************************');
  }  

  switch(err.name) {
    case 'NotFoundError':
      // if(html) {
      //   return res
      //     .status(404)
      //     .render('pages/error', {
      //       status: 404,
      //       title: 'error',
      //       msg: 'Page not found'
      //     })
      // }
      return res
        .status(404)
        .json({
          status: err.status,
          msg: err.message
        });
      break;
    case 'ReferenceError':
      // if(html) {
      //   return res
      //     .status(500)
      //     .render('pages/error', {
      //       status: 404,
      //       title: 'error',
      //       msg: 'Internal Server Error (reference)'
      //     })
      // }      
      return res
        .status(500)
        .json({
          status: err.status,
          msg: err.message
        });
      break; 
    case 'CastError': 
      // if(html) {
      //   return res
      //     .status(404)
      //     .render('pages/error', {
      //       status: 404,
      //       title: 'error',
      //       msg: 'Resource not found'
      //     })
      // }    
      return res
        .status(404) 
        .json({
          status: 404,
          msg: err.message
        });
        break;
    default:
      // if(html) {
      //   return res
      //     .status(500)
      //     .render('pages/error', {
      //       status: 500,
      //       title: 'error',
      //       msg: err.message
      //     })
      // }      
      return res
        .status(500) 
        .json({
          status: 500,
          msg: err.message
        }); 
  }  

}

module.exports = handleError;