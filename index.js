const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port your server will listen on
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Serve plain text for the root URL
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!\n');
    } else if (req.url === '/status') {
        // Serve status response
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Status: OK');
    } else if (req.url === '/index.html') {
        // Serve the index.html file if the request is for it
        const filePath = path.join(__dirname, 'index.html');
        
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
    } else {
        // For any other URL, return a 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server and listen on the defined port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
