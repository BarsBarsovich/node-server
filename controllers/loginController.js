const dbWorker = require('../models/dbworker');

module.exports.saveLogin = function({email, password}){
  return new Promise((resolve, reject) => {
    try{
      dbWorker.saveLogin(email, password);
      resolve();
    }catch(err){
      reject(err);
    }
  });
}
