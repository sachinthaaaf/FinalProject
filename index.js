require('newrelic');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port your server will listen on
const port = 3000;

// Define the root directory for the 'wisdom-academy' web application
const rootDirectory = path.join(__dirname, 'wisdom-academy');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Resolve the file path based on the request URL
    let filePath = path.join(rootDirectory, req.url === '/' ? 'index.html' : req.url);

    // Get the file extension for content-type mapping
    const extname = path.extname(filePath);
    let contentType = 'text/html'; // Default to HTML

    // Set the content type based on the file extension
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    // Read the requested file from the file system
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Handle errors (like file not found)
            if (err.code === 'ENOENT') {
                // If file not found, return a 404
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 - Not Found');
            } else {
                // Return a 500 Internal Server Error for other errors
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Internal Server Error');
            }
        } else {
            // Serve the requested file
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Start the server and listen on the defined port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
