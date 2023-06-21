const fs = require('fs');
const path = require('path');

function writeToFile(directory , content) {
  fs.write(path.join(__dirname, directory), content, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File written successfully!');
    }
  });
}

module.exports = writeToFile;