
const http = require('http');

const host = 'localhost';
const port = 8080;

//JSONS that become paths, ie. localhost:8080/songs or localhost:8080/artists
const songs = JSON.stringify([
    { title: "DNA.", artist: "Kendrick Lamar", year: 2017 },
    { title: "PRISM", artist: "Friday Night Plans", year: 2019 }
]);

const artists = JSON.stringify([
    { name: "Kendrick Lamar", countryOfBirth: "America", yearOfBirth: 1987 },
    { name: "Friday Night Plans", countryOfBirth: "Japan", yearOfBirth: 1996 }
]);

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    switch (req.url) { //switch statement
        case '/songs': //localhost:8080/songs
            res.writeHead(200);
            res.end(songs)
            break
        case '/artists': //localhost:8080/artists
            res.writeHead(200);
            res.end(artists);
            break
        default: //if the path is not /songs or /artists
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'Resource not found' }))
    }

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`server is running oh http://${host}:${port}`);
});
