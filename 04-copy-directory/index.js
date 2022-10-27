const fs = require('fs');
const path = require('path');
const {readdir} = require('fs/promises');
 
(function copyDir(){
  function callback(err) {
    if (err) throw err;
  }

  fs.mkdir(path.join(__dirname, 'copy-files'), { 
    recursive: true 
  }, (err) => {
    if (err) throw err;
  });

  readdir(path.join(__dirname, 'copy-files'))
  .then((files) => {
  for (const file of files) {
    fs.unlink(path.join(__dirname, 'copy-files', file), (err) => {
      if (err) throw err;
    })
  }
  });

  readdir(path.join(__dirname, 'files'))
    .then((files) => {
    for (const file of files) {
      fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'copy-files', file), callback)
    }
  });


})()