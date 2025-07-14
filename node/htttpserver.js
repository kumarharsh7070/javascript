// const http = require('http');
// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     console.log(req.url); // FIX: 'url' is a property of 'req'

//     res.statusCode = 200; // FIX: 'res', not 'req'
//     res.setHeader("Content-Type", "text/html"); // Optional: Capitalize headers
//     res.end("<h1>This is CodeWithHarry</h1><p>Hey, this is the way to rock the world</p>");
// });

// server.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page");
    } else if (req.url === '/about') {
        res.end("Here is our short history");
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">Back to home</a>
        `);
    }
});

server.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
