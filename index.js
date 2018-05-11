const fs = require('fs');
const datetime = require('./dates');

const writeToFile = (filename, data, dateStamp) => {
  let file = (dateStamp === true) ? datetime.yyyymmdd() + '.' + filename : filename;

  fs.writeFile(file, data, (err) => {
    if(err) { return console.error(err); }
  });
};

const appendToFile = (filename, data, dateStamp) => {
  let file = (dateStamp === true) ? datetime.yyyymmdd() + '.' + filename : filename;

  fs.appendFile(filename, data, (err) => {
    if (err) { return console.error(err); }
  });
};

const readObjectFromFile = filename => {
  try {
    return JSON.parse(fs.readFileSync(filename, 'utf8'));
  } catch(e) {
    return {}
  }
}

module.exports = {
  writeToFile,
  appendToFile,
  readObjectFromFile,
};
