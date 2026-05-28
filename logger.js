const url = 'http://test.com/log'

 function log(message){
  // send an http request
  console.log(message);
}

const test = 'hoiahef'
const test2 = 'test2'

 module.exports.log = log; 
 exports.url = url; // module.exports === exports but they both are totally different as Module is Parent big object, 
//  only that exports key is equal to exports not whole Module is equal to exports...

// Exports get the value of Module.exports, you need to mutate module.exports to export variables using exports.