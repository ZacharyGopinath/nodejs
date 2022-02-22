// This is the boilerplate for a node server
const http = require('http');

const host = 'localhost'; // name before port number
const port = 8080; // localhost:8080

const requestListener = function (req, res) { //req = request res = response
    res.writeHead(200); //http status code 200
    res.end('My server!'); //output on the page
};

const server = http.createServer(requestListener); //uses http module to start the server with the req listener
server.listen(port, host, () => {
    console.log(`server is running oh http://${host}:${port}`); //ouput seen in terminal
});

