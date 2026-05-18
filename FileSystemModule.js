const fs = require('fs');

// Synchrouous way of handling files, avoid that............
const files = fs.readdirSync('./')
console.log('files', files)

// Asynchronous way of reading files in a directory, always choose async methods or properties.........
fs.readdir('./', (err, files) => {
  if(err) console.log('error', err);
  else console.log('files in Async way', files)
})

// Read a file from OS...
fs.readFile('/home/harvinder/Downloads/test', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('data', data);
});

// Write a file in the OS...
fs.writeFile('/home/harvinder/Downloads/test', 'Hello from Node namaste', (err) => {
  if (err) throw err;
  console.log('File written');
});
