const dbWorker = require('../models/dbworker');
const uuid = require('uuid');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

module.exports.upload =  (files,name, price)=>{
  return new Promise((resolve, reject)=>{
    try{
      const {name: fileName, size, path: tempPath} = files.photo;
      const uploadDir = path.join(process.cwd(), 'public', 'upload');

      if (!fs.existsSync(uploadDir)){
        fs.mkdirSync(uploadDir);
      }

      if (!files.name || !files.price){
        fs.unlinkSync(uploadDir);
        reject('All fields required');
        return;
      }

      fs.renameSync(tempPath, path.join(uploadDir, fileName));    
      resolve();
    }catch(err){
      reject(err);
    }
  });
}

module.exports.addSkills = function ({ age, concerts, cities, years }) {
  return new Promise((resolve, reject) => {
    try {
      dbWorker.skillsAdd(age, concerts, cities, years);
      resolve();
    } catch (err) {
      reject(err);
    }
  })
}
