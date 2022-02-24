const http = require('http');
const fs = require('fs').promises;
const index = require('./public/index');

const host = 'localhost';
const port = 8080;

let indexFile;

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(indexFile)
}

const server = http.createServer(requestListener);

fs.readFile(__dirname + '/index.html').then(
    contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`server is running oh http://${host}:${port}`);
        });
    }
).catch(err => {
    console.error(`Error: ${err}`);
    process.exit(1)
})
index.script();