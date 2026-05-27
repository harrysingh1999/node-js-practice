const { log, url } = require("./logger"); // This is common JS Module System of importing, which is Old now ES Modules are used............

function sayHello(name){
  console.log("Hello " + name);
}

// sayHello("World"); 
// console.log(module);
console.log(url);

log('accessing log from logger module in App module')