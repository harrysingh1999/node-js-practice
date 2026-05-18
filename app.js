const { log, url } = require("./logger");

function sayHello(name){
  console.log("Hello " + name);
}

// sayHello("World"); 
// console.log(module);
console.log(url);

console.log(log('accessing log from logger module in App module'))