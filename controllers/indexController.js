const db = require('../models/dbworker');

module.exports.save = function ({ name, email, message }) {
  return new Promise((resolve, reject) => {
    try {
      db.saveMessage(name, email, message);
      resolve();
    } catch (err) {
      reject(err);
    }
  })
}
