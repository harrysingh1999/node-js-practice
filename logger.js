const url = 'http://test.com/log'

 function log(message){
  // send an http request
  console.log(message);
}

 module.exports.log = log; 
 exports.url = url; // module.exports = exports... 