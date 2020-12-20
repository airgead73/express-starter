const handleError = async function(err, req, res, next) {

  let status = err.status || 500;
  let message;
  let messages;;

  // if db error, get error messages from mongoose error object
  const getValidationMessages = function(err) {

    const messages = [];
    const errorKeys = Object.keys(err.errors);

    errorKeys.forEach(key => {
      messages.push(err.errors[key].message);
    });

    return messages;

  }  

  switch(err.name) {
    case 'ValidationError':
      messages = getValidationMessages(err);
      break;
    case 'NotFoundError':
      message = err.message || 'Resource not found'
      messages = [message];
      break;      
    default: 
      message = err.message || 'Resource not found'
      messages = [];
      break;  
  }

  if(res.locals.res_json) {
    return res  
      .status(status)
      .json({
        success: false,
        name: err.name,
        status: status,
        messages: messages,
        stack: Err
      });      
  } else {
    return res
      .status(status)
      .render('pages/error', {
        success: false,
        status: status,
        messages: messages
      });
  }



}

module.exports = handleError;