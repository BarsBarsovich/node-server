const fs = require('fs');
const path = require('path');

module.exports.saveMessage = function (name, email, message) {
  const dbPath = path.join(process.cwd(), 'db', 'message.json');
  if (fs.existsSync(dbPath)) {
    // если файлик существует, то надо дописать
    console.log('File Appended');

    const fileContent =fs.readFileSync(dbPath, 'utf8');
    if (fileContent === ''){
      fs.writeFileSync(dbPath, `{"Users":[{"name":"${name}", "email":"${email}", "message": "${message}"}]}`);
      return;
    }
    const dbEntity = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    let dbTextContent = '{"Users":[';
    Array.from(dbEntity['Users']).map(item => {
      dbTextContent += `{"name":"${item.name}", "email":"${item.email}", "message": "${item.message}"}`;
    });

    dbTextContent += `,{"name":"${name}", "email":"${email}", "message": "${message}"} ]}`;
    fs.writeFileSync(dbPath, dbTextContent);

  } else {
    console.log('File Created');
    fs.writeFileSync(dbPath, `{"Users":[{"name":"${name}", "email":"${email}", "message": "${message}"}]}`);
  }
};

module.exports.saveLogin  = function (email, password){

}


