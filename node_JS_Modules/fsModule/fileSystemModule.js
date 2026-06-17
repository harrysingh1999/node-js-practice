// import fs from 'fs';
import fs from 'fs/promises' // it is another way of importing fs module, it will give us promise based methods,
//  we can use async await with these methods, always choose this, you will not get sync methods in this.............


// Read a file from OS...

// #1. SyncWay- SyncMethods are not suggested as they block main thread...................
// const fileData = fs.readFileSync('/home/harvinder/Downloads/test', 'utf-8');

// console.log('filedDaara', fileData)

// #2. Async Way- Aysnc are better than sync as they don't as they don't block main thread, but can cause callback hell...................
// fs.readFile('/home/harvinder/Downloads/test', 'utf-8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('data', data);
// });

// #3. Async with Promises Way- Aysnc with Promises are ideal choice than others as they don't as they don't block main thread nor create callback hell...................
const data = await fs.readFile('/home/harvinder/Downloads/test', 'utf-8')

console.log('data', data)


// Write a file in the OS.....................................................

// We can read and write any type of File using FS Modules......................

const readFileBuffer = await fs.readFile('Modules/nodeJSModules/download.png') // This will give us file in Buffer Format(binaries or numbers)
// any data stored in disk, is in the format of binary......................

fs.writeFile('/home/harvinder/Desktop/testingWrite', readFileBuffer); //writeFile method will use buffer data and write the file in given path,
//  if file present then it will overwrite the entire data with new data, otherwise it will create a new file and write the data in it......................


// In above case we read a image file and then write it in another location, we can do this with any file type, we don't need to worry about converting it,
// just provide the buffer of that File, that's it........................

const date = new Date().toLocaleTimeString()

setInterval(() => {
  fs.writeFile('testWriteFile',  new Date().toLocaleTimeString())
}, 300)