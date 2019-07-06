const path = require('path');
const fs = require('fs');
module.exports.upload = function (fileName, name, price) {
  try {    
    console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    const pathToFile = `./upload/${fileName}`;
    const dbFolder = path.join(process.cwd(), 'db');
    const dbPathFile = path.join(dbFolder, 'products.json');

    if (fs.existsSync(dbPathFile)) {
      const fileContent = fs.readFileSync(dbPathFile, 'utf8');
      if (fileContent === '') {
        fs.writeFileSync(dbPathFile, `{"products":[{"email":"${email}", "password": "${password}"}]}`);
        return;
      }
      const dbEntity = JSON.parse(fs.readFileSync(dbPathFile, 'utf8'));
      let dbTextContent = '{"products":[';
      Array.from(dbEntity['products']).map(item => {
        dbTextContent += `{"src": "${item.src}","name": "${item.name}","price": "${item.price}"},`;
      });

      dbTextContent += `{"src": "${pathToFile}","name": "${name}","price": "${price}"}]}`;
      fs.writeFileSync(dbPathFile, dbTextContent);

    } else {
      const jsonContent = `{"products": { ["src":"${pathToFile}","name": "${name}","price": "${price}"}]}`;
      fs.writeFileSync(dbPathFile, jsonContent);
    }
    console.log('PathInController', pathToFile);
  } catch (err) {
    console.log(err);
  }
}

module.exports.read = function () {
  try {
    const dbFolder = path.join(process.cwd(), 'db');
    const dbPathFile = path.join(dbFolder, 'products.json');

    if (fs.existsSync(dbPathFile)) {
      const result = fs.readFileSync(dbPathFile, 'utf-8');      
      return result;
    }
    return '';

  } catch (err) {
    console.log(err);
  }
}