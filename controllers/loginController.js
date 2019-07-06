const dbWorker = require('../models/dbworker');
module.exports.get = function (req, res) {
  res.render('pages/login', { title: 'Login' });
}

module.exports.post = function (req, res, next) {
  const { email, password } = req.body;
  dbWorker.saveLogin(email, password);
  console.log('BeforeSaveLOgin');
  if (email === 'kek@kek.kek' && password === '123') {
    res.redirect('/admin')
  } else {
    res.redirect(req.get('referer'));
    res.flash('Incorrect login');
  }

  next();
}