const db = require('../models/dbworker');
module.exports.get = function (req, res) {
  const dbFile = JSON.parse(db.readFromSkills());
  const productsFile = JSON.parse(db.uploadRead());
  console.log(productsFile.products);
  res.render('pages/index', {
    title: 'main',
    skills: dbFile.skills,
    products: productsFile.products
  })
}

module.exports.post = function (req, res, next) {
  const { name, email, message } = req.body;
  db.saveMessage(name, email, message);
  req.flash('status', 'bench');
  // res.redirect(req.get('referer'));
  next();
}
