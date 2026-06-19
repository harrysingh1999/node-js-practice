import http from 'http';

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers)
  res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Complete Coding</title></head>');
res.write('<body><h1>Like / Share / Subscribe</h1></body>');
res.write('</html>');
res.end('response ended from server') // res.end()is used to end the response from server to client....................
  // process.exit()  // exit from event loop after sending the response to avoid keeping the server running indefinitely......................
})

server.listen(3000, () => {
  console.log(`Server is running on address http://localhost:${3000}`)
})