const http = require('http');

const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) { //req = request res = response
    res.setHeader('Content-Type', 'text/html'); //tells the server details about the request, type of data the client/user or request wants in the response
    res.writeHead(200);
    res.end(`<html><body><h1>HTML !</h1></body></html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`server is running oh http://${host}:${port}`);
});