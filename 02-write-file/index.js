const fs = require('fs');
const path = require('path');

const { stdout, stdin } = process;

const link = path.join(__dirname,'text.txt');

const stream = fs.createWriteStream(link);
stdout.write('введите текст ');
stdin.on('data', chunk => {
  const string = chunk.toString().trim().toLowerCase();
  if(string === 'exit'){
    stdout.write('все-го хо-ро-ше-го!'.toUpperCase());
    process.exit();
  }
  stream.write(chunk)
});
process.on('SIGINT', () => {
  stdout.write('\nвсе-го хо-ро-ше-го!'.toUpperCase());
  process.exit();
});


