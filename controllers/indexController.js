const db = require('../models/dbworker');
module.exports.get = function (req, res) {
  res.render('pages\index', {title: 'main'})
}

module.exports.post = function (req, res,  next) {
  const {name, email, message} = req.body;
  db.saveMessage(name, email, message);
  res.redirect(req.get('referer'));
  next();
}
