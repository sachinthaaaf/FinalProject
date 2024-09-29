const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port your server will listen on
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the file path to the index.html file
  const filePath = path.join(__dirname, 'index.html');

  // Read the index.html file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // If there's an error, return a 500 Internal Server Error
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Server Error');
    } else {
      // If successful, serve the index.html file
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

// Start the server and listen on the defined port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
