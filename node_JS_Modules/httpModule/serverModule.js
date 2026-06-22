// Chunks, the small part of the data or information................
// Buffers, it is the grouping of chunks, it handles the sequence of chunks and arrange them in a small group together ................
// Streams, It is continuous flow of data or information to a particular direction......................

// A large file doesn't uploaded or downloaded at once, it happens continously bit by bit,
// that's why we need buffer of chunk so it can be send or receive as a stream..............................

import http from 'http';

const server = http.createServer((req, res) => {

console.log(req.url, req.method)
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Complete Coding</title></head>');
res.write('<body><h1>Enter Your Details:</h1>');
res.write('<form action="/submit-details" method="POST">');
res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
res.write('<input type="text" name="age" placeholder="Enter your age"><br>');
res.write('<input type="text" name="profile" placeholder="Enter your profile"><br>');
res.write('<input type="text" name="city" placeholder="Enter your city"><br>');
res.write('<label for="male">Male</label>')
res.write('<input type="radio" id="male" name="gender" value="Male"/>')
res.write('<label for="female">Female</label>') 
res.write('<input type="radio" id="female" name="female" value="Female"/>')
res.write('<br><input type="submit" value="Submit"/>')
res.write('</form>');
res.write('</body>');
res.write('</html>');

if (req.method === 'POST'){
  const body = [];

  req.on('data', (chunk) => {   //.on is alias of .addEventListener, 'data' is the event...........................
    console.log('chunk', chunk)
    body.push(chunk)
  })

  req.on('end', () => {
    console.log('body', body)
    const fullBody = Buffer.concat(body).toString()
    console.log('fullBody', fullBody)
    const params = new URLSearchParams(fullBody)
    console.log('params', params)
    const data = Object.fromEntries(params)
    console.log('data', data)
  
  })
}

res.end() // it is used to end the response from server to client, argument optional....................
  // process.exit()  // exit from event loop after sending the response to avoid keeping the server running indefinitely......................
})

server.listen(3000, () => {
  console.log(`Server is running on address http://localhost:${3000}`)
})

