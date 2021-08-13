const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
    // console.log(req.headers)
    // console.log(req)
    res.charset = 'UTF-8';

    if (req.url === '/') {
        if (req.method == 'POST') {
            req.on('data', function(chunk) {
              console.log("Received body data:");
              console.log(chunk.toString());
            });
        }

        let data = {
            username: "Karto4an",
            age: 30,
        };

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));

    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});
