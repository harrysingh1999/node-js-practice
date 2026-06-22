import { addition } from "./utils.js";

export const requestHandler = (req, res) => {
 console.log(req.url)
 res.setHeader('Content-Type', 'text/html');
 res.write('<html>')
 res.write('<body>')

 if(req.url === '/'){
 res.write('<h1> welcome to Calculator server </h1>')
 res.write("<a href='/calculator'>Calculator</a>")
 res.end()
 }else if (req.url === '/calculator'){
 res.write('<form action="/calculate-result" method="POST">')
 res.write('<input type="number" name="firstNumber" placeholder="Enter your 1st Number"/><br>')
 res.write('<input type="number" name="secondNumber"  placeholder="Enter your 2nd Number"/><br>')
 res.write('<button type="submit">SUM</button>')
 res.write('</form>')

 res.end()
}else if (req.url === '/calculate-result' && req.method === 'POST'){

  const body = []

  // Reading Chunks...................................
  req.on('data', (chunk) => {
    console.log('chunk', chunk)

    body.push(chunk)
  })
  
  req.on('end', () => {
    console.log('body', body)
    const fullBody = Buffer.concat(body).toString();  // Buffering Chunks......................
    console.log('fullBody', fullBody)
    const params = new URLSearchParams(fullBody)
    console.log('params', params)
    const data = Object.fromEntries(params) // Parsing Request.........................
    console.log('data inside', data)
    res.write(`The Sum of 2 Numbers is: ${addition(data?.firstNumber, data?.secondNumber)}`)
    res.end()
  })
  res.write('</body>')
  res.write('</html>')
}

}