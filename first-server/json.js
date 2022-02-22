const http = require('http');

const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(`{'message: 'This is a JSON response!}`); //object notation, key-value-pair
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`server is running oh http://${host}:${port}`);
});

