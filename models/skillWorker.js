const fs = require('fs');
const path = require('path');
module.exports.read = function () {
    try {
        const dbFolder = path.join(process.cwd(), 'db');
        const dbPathFile = path.join(dbFolder, 'skills.json');

        if (fs.existsSync(dbPathFile)) {
            const result = fs.readFileSync(dbPathFile, 'utf-8');
            return result;
        }
        return '';

    } catch (err) {
        console.log(err);
    }
}

module.exports.add = function(age, concerts, cities, year){
    try {
        const dbFolder = path.join(process.cwd(), 'db');
        const dbPathFile = path.join(dbFolder, 'skills.json');
    
        if (!fs.existsSync(dbFolder)) {
          fs.mkdirSync(dbFolder);
        }
    
        // если файл с скилами уже есть,мы его удалим и сделаем новый
        if (fs.existsSync(dbPathFile)) {
          fs.unlinkSync(dbPathFile);
        }        
        const jsonContent = `{"skills": [{"number": "${age}","text": "Возраст начала занятий на скрипке"},` +
          `{"number": "${concerts}","text": "Концертов отыграл"},` +
          `{"number": "${cities}","text": "Максимальное число городов в туре"},` +
          `{"number": "${year}","text": "Лет на сцене в качестве скрипача"}]}`
        fs.writeFileSync(dbPathFile, jsonContent);
      } catch (err) {
        console.log(err);
      }
    
}