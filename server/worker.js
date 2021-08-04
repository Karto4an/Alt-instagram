const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    let ua = req.headers['user-agent']
    res.charset = 'UTF-8';

    if (req.url === '/') {
        if (req.headers['accept'].match('image/webp')) {
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.write('WebP supported\n');
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.write('No WebP support\n');
        }
        res.write('----RESPONSE END----')

        res.end();
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('Error 404 Not Found');
        console.log(`404: ${req.url}`)
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});
