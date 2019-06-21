function authe(req,res,next) {
    console.log('Authenticating...');
    next();
  };

module.exports = authe;