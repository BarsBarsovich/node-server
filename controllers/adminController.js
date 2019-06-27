module.exports.get = function (req, res) {
  console.log('Endpoint checked');
  res.render('pages/admin', {title: 'admin'})
}
