// Each Module in Nodejs is wrapped in a function, which is called Module Wrapper Function, by default it is hidden while creating Module,
//  this is done to provide scope to the variables and functions defined in the module,
//  so that they are not accessible outside the module, and also to provide a way to export the variables and functions defined in the module,
//  so that they can be accessed from other modules.

(funtion(exports, require, module, __filename, __dirname){
  // Your Module Code goes here.............
  const a = 4;
  // That's why A variable comes in Local Scope in Nodejs instead of Global as it is defined inside a Function.........
})(exports, require, module, __filename, __dirname)

// Module Wrappr Function is IIFE funciton as you can see.......