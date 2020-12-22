const handleError = async function(err, req, res, next) {

  console.log(err)

  // Validation Error

  if(err.name === 'ValidationError') {
    let errors = {}
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    });

    return res  
      .status(err.status || 500)
      .json({
        success: false,
        name: err.name,
        status: err.status || 500,
        errors: errors        
      }); 

  }

  // Duplicate error code

  if(err.code === 11000) {
    return res  
    .status(err.status || 500)
    .json({
      success: false,
      name: err.name,
      status: err.status || 500,
      errors: { email: 'Email is already in use.'}       
    });    
  }

  // Not found Error

  if(err.name === 'NotFoundError') {
    return res  
      .status(err.status || 500)
      .json({
        success: false,
        name: err.name,
        status: err.status || 500,
        errors: err       
      });     
  }

  // System Error

  if(err.name === 'Error') {
    return res  
      .status(err.status || 500)
      .json({
        success: false,
        name: err.name,
        status: err.status || 500,
        errors: { message: err.message }       
      });     
  }  

  // Any other error

  return res  
  .status(err.status || 500)
  .json({
    success: false,
    name: err.name,
    status: err.status || 500,
    errors: err        
  }); 



  // let status = err.status || 500;
  // let message;
  // let messages;;

  // // if db error, get error messages from mongoose error object
  // const getValidationMessages = function(err) {

  //   const messages = [];
  //   const errorKeys = Object.keys(err.errors);

  //   errorKeys.forEach(key => {
  //     messages.push(err.errors[key].message);
  //   });

  //   return messages;

  // }  

  // switch(err.name) {
  //   // case 'ValidationError':
  //   //   messages = getValidationMessages(err);
  //   //   break;
  //   case 'NotFoundError':
  //     message = err.message || 'Resource not found'
  //     messages = [message];
  //     break;      
  //   default: 
  //     message = err.message || 'Resource not found'
  //     messages = [];
  //     break;  
  // }

  // if(res.locals.res_json) {
  //   return res  
  //     .status(status)
  //     .json({
  //       success: false,
  //       name: err.name,
  //       status: status,
  //       messages: messages,
  //       stack: err
  //     });      
  // } else {
  //   return res
  //     .status(status)
  //     .render('pages/error', {
  //       success: false,
  //       status: status,
  //       messages: messages
  //     });
  // }



}

module.exports = handleError;