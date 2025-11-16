const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
    comsole.log("Req", req);
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to the Homepage!');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the About Page');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the Contact Us Page');
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page Not Found');
    }
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});





const https = require('https'); // Use 'http' for non-SSL connections

const options = {
  hostname: 'jsonplaceholder.typicode.com', // The domain of the API
  port: 443, // 80 for HTTP, 443 for HTTPS
  path: '/users', // The specific API endpoint
  method: 'GET', // HTTP method (GET, POST, PUT, DELETE, etc.)
  headers: {
    'Content-Type': 'application/json', // Example header
    // Add other headers as needed
  },
};

const req = https.request(options, (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  res.on('end', () => {
    console.log('Status Code:', res.statusCode);
    console.log('Headers:', res.headers);
    try {
      const users = JSON.parse(data);
      console.log('Response Data:', users);
    } catch (e) {
      console.error('Error parsing JSON:', e);
      console.log('Raw response data:', data);
    }
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

// For POST, PUT, or PATCH requests, write data to the request body
// req.write(JSON.stringify({ key: 'value' }));

req.end(); // End the request