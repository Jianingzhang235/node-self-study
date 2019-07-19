const winston = require('winston');

module.expects = function (err, req, res, next) {
  //log the exception
  winston.error(err.message, err);

  //error
  //warn
  //info
  //debug
  //silly

  


  res.status(500).send('Something failed');
};
