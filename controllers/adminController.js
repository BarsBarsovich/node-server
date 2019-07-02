const dbWorker = require('../models/dbworker');
const uuid = require('uuid');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

module.exports.get = function (req, res) {
  res.render('pages/admin', {title: 'admin'})
}

module.exports.upload = function (req, res, next) {
  try {
    const {photo, name, price} = req.body;
    let form = new formidable.IncomingForm();
    let upload = path.join('public', 'upload');

    if (!fs.existsSync(upload)) {
      fs.mkdirSync(upload);
    }

    form.uploadDir = path.join(process.cwd(), upload);

    console.log(form.uploadDir);


    form.parse(req, function (err, fields, files) {
      console.log('Form was parsed');
      const fileName = path.join(upload, files.photo.name);

      fs.rename(files.photo.path, fileName, (err) => {
        if (err) {
          console.error(err.message);
        }
      })


      res.redirect('/admin?status=Good');
    });

  } catch (err) {
    console.error(err);
  }
}


module.exports.addSkills = function (req, res, next) {
  const {age, concerts, cities, years} = req.body;
  dbWorker.skillsAdd(age, concerts, cities, years);
  res.redirect(req.get('referer'));
  next();
}
