// import the http module
const http = require('http');

// define the port number for the server to listen on
const port = 3000;

// create a function to handle incoming requests
const requestHandler = (request, response) => {
  console.log(`Received request for ${request.url}`);
  response.end('Hello World!');
};

// create a new server and pass in the request handler function
const server = http.createServer(requestHandler);

// start the server listening on the specified port
server.listen(port, (error) => {
  if (error) {
    return console.error(`Error starting server: ${error}`);
  }

  console.log(`Server listening on port ${port}`);
});
