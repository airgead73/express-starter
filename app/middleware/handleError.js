const handleError = async function(err, req, res, next) {

  let status = err.status || 500;
  let message;

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
      return res
        .status(status)
        .json({
          success: false,
          name: err.name,
          status: status,
          messages: getValidationMessages(err),
          stack: err
        });
      break;
    case 'NotFoundError':
      message = err.message || 'Resource not found'
        return res
          .status(status)
          .json({
            success: false,
            name: err.name,
            status: status,
            messages: [message],
            stack: err
          });
        break;      
    default: 
      message = err.message || 'Resource not found'
      return res
        .status(status)
        .json({
          success: false,
          name: err.name,
          status: status,
          messages: [message],
          stack: err
        });  
      break;  
  }



}

module.exports = handleError;