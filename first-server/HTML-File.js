const http = require('http');
const fs = require('fs').promises; //file system module

const host = 'localhost';
const port = 8080;

let indexFile; //empty variable

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(indexFile)
}

const server = http.createServer(requestListener);

fs.readFile(__dirname + '/index.html').then(
    contents => {
        indexFile = contents; //variable set to the contents of index.html
        server.listen(port, host, () => {
            console.log(`server is running oh http://${host}:${port}`);
        });
    }
).catch(err => {
    console.error(`Error: ${err}`);
    process.exit(1) //exit code 1 = uncaught fatal exception
})

//  Alternateive Method
/*
const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html").then(
        contents => {
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(contents)
        }
    ).catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    })
};

server.listen(port, host, () => {
    console.log(`server is running oh http://${host}:${port}`);
});*/
