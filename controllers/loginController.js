const dbWorker = require('../models/dbworker');

module.exports.saveLogin = function ({ email, password }) {
  return new Promise((resolve, reject) => {
    try {
      dbWorker.saveLogin(email, password);

      if (email === 'kek@kek.kek' && password === '123') {
        resolve();
      } else {
        reject('Invalid login');
      }
    } catch (err) {
      reject(err);
    }
  });
}
