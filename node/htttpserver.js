const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url); // FIX: 'url' is a property of 'req'

    res.statusCode = 200; // FIX: 'res', not 'req'
    res.setHeader("Content-Type", "text/html"); // Optional: Capitalize headers
    res.end("<h1>This is CodeWithHarry</h1><p>Hey, this is the way to rock the world</p>");
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
