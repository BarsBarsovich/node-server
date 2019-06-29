const dbWorker = require('../models/dbworker');
module.exports.get = function(req, res){
  res.render('pages/login', {title: 'Login'});
}

module.exports.post = function(req, res, next){  
  const {email,password} = req.body;
  dbWorker.saveLogin(email,password);
  console.log('BeforeSaveLOgin');
  res.redirect(req.get('referer'));
  next();
}