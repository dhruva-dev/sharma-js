const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow common methods

    // Handle preflight requests (OPTIONS method)
    if (req.method === 'OPTIONS') {
        res.writeHead(204); // No content
        res.end();
        return;
    }

    let body = '';
    req.on("data", chunk => {
        body += chunk.toString();
    });

    req.on("end", async () => {
        try {
            try {
                const data = await makeCall(req.url);
                res.writeHead(200, {
                    "Content-Type": "application/json"
                });
                res.end(JSON.stringify(data));
            } catch (err) {
                res.writeHead(500, {
                    "Content-Type": "application/json"
                });
                res.end(JSON.stringify(err));
            }
        } catch (e) {
            res.writeHead(500, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({ err: 'invalid req, req body is not json' }));
        }
    })
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});


function makeCall(path) {
    return new Promise((resolve, reject) => {
        const https = require('https'); // Use 'http' for non-SSL connections

        const options = {
            hostname: 'datamall2.mytransport.sg', // The domain of the API
            port: 443, // 80 for HTTP, 443 for HTTPS
            path: path, // The specific API endpoint
            method: 'GET', // HTTP method (GET, POST, PUT, DELETE, etc.)
            headers: {
                'Content-Type': 'application/json', // Example header
                'AccountKey': 'gDYp8AZuSjCCIs1814cPNg=='
            },
        };

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const users = JSON.parse(data);
                    console.log('Response Data:', users);
                    resolve(users);
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                    console.log('Raw response data:', data);
                    reject(e);
                }
            });
        });

        req.on('error', (e) => {
            console.error(`Problem with request: ${e.message}`);
        });

        req.end();
    });
}


