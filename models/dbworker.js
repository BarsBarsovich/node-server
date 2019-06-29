const fs = require('fs');
const path = require('path');

module.exports.saveMessage = function (name, email, message) {
  try {
    const dbFolder = path.join(process.cwd(), 'db');
    const dbPathFile = path.join(dbFolder, 'message.json');

    console.log('DbFolder', dbFolder);
    if (!fs.existsSync(dbFolder)) {
      fs.mkdirSync(dbFolder);
    }
    if (fs.existsSync(dbPathFile)) {
      // если файлик существует, то надо дописать
      console.log('File Appended');

      const fileContent = fs.readFileSync(dbPathFile, 'utf8');
      if (fileContent === '') {
        fs.writeFileSync(dbPathFile, `{"Users":[{"name":"${name}", "email":"${email}", "message": "${message}"}]}`);
        return;
      }
      const dbEntity = JSON.parse(fs.readFileSync(dbPathFile, 'utf8'));
      let dbTextContent = '{"Users":[';
      Array.from(dbEntity['Users']).map(item => {
        dbTextContent += `{"name":"${item.name}", "email":"${item.email}", "message": "${item.message}"},`;
      });

      dbTextContent += `{"name":"${name}", "email":"${email}", "message": "${message}"} ]}`;
      fs.writeFileSync(dbPathFile, dbTextContent);

    } else {
      console.log('File Created');
      fs.writeFileSync(dbPathFile, `{"Users":[{"name":"${name}", "email":"${email}", "message": "${message}"}]}`);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.saveLogin = function (email, password) {
  try {
    const dbFolder = path.join(process.cwd(), 'db');
    const dbPathFile = path.join(dbFolder, 'login.json');

    console.log('DbFolder', dbFolder);
    if (!fs.existsSync(dbFolder)) {
      fs.mkdirSync(dbFolder);
    }
    if (fs.existsSync(dbPathFile)) {
      // если файлик существует, то надо дописать
      console.log('File Appended');

      const fileContent = fs.readFileSync(dbPathFile, 'utf8');
      if (fileContent === '') {
        fs.writeFileSync(dbPathFile, `{"Logins":[{"email":"${email}", "password": "${password}"}]}`);
        return;
      }
      const dbEntity = JSON.parse(fs.readFileSync(dbPathFile, 'utf8'));
      let dbTextContent = '{"Logins":[';
      Array.from(dbEntity['Logins']).map(item => {
        dbTextContent += `{"email":"${item.email}", "password": "${item.password}"},`;
      });

      dbTextContent += `{"email":"${email}", "password": "${password}"} ]}`;
      fs.writeFileSync(dbPathFile, dbTextContent);

    } else {
      console.log('File Created');
      fs.writeFileSync(dbPathFile, `{"Logins":[{ "email":"${email}", "password": "${password}"}]}`);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports.uploadAdd = function (pathToFile, name, price) {

}

module.exports.skillsAdd = function (age, concerts, cities, year) {
  try {
    const dbFolder = path.join(process.cwd(), 'db');
    const dbPathFile = path.join(dbFolder, 'skills.json');

    console.log('DbFolder', dbFolder);
    if (!fs.existsSync(dbFolder)) {
      fs.mkdirSync(dbFolder);
    }
    if (fs.existsSync(dbPathFile)) {
      // если файлик существует, то надо дописать
      console.log('File Appended');

      const fileContent = fs.readFileSync(dbPathFile, 'utf8');
      if (fileContent === '') {
        fs.writeFileSync(dbPathFile,
          `{"Skills":[{"age":"${age}", "concerts": "${concerts}", "cities":"${cities}", "year":"${year}"}]}`);
        return;
      }
      const dbEntity = JSON.parse(fs.readFileSync(dbPathFile, 'utf8'));
      let dbTextContent = '{"Skills":[';
      Array.from(dbEntity['Skills']).map(item => {
        dbTextContent += `{"age":"${item.age}", "concerts": "${item.concerts}", "cities":"${item.cities}", "year":"${item.year}"},`;
      });

      dbTextContent += `{"age":"${age}", "concerts": "${concerts}", "cities":"${cities}", "year":"${year}"} ]}`;
      fs.writeFileSync(dbPathFile, dbTextContent);

    } else {
      console.log('File Created');
      fs.writeFileSync(dbPathFile, `{"Skills":[{"age":"${age}", "concerts": "${concerts}", "cities":"${cities}", "year":"${year}"}]}`);
    }
  } catch (err) {
    console.log(err);
  }
}


