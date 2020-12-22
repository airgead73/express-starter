const logRequests = function(req, res, next) {

  console.log('*** new request made ***');
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("accepts: ", req.headers.accept);
  console.log("method: ", req.method);
  console.log('*** end log ***'); 

  next();

};

module.exports = logRequests;