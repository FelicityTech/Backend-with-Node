const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// This code creates a server that listens on port 3000 on the local
// host (IP address 127.0.0.1). When a request is received, it sets 
// the HTTP status code to 200 and the Content-Type header to text/plain.
// It then sends the response body Hello, world!\n. Finally, it starts the 
// server and logs a message to the console indicating that it's running.
