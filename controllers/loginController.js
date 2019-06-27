module.exports.get = function(req, res){
  res.render('pages/login', {title: 'Login'});
}

module.exports.post = function(req, res){
  console.log('Name', req.body.name);
  res.end();
}
