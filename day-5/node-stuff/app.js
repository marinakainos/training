const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === "/") {
        res.end("Main page");
    } else if (req.url === "/about") {
        res.end("About me");
    } else if (req.url == "/contact") {
        res.end("Contact us");
    } else {
        res.end("404 not found")
    }
})

server.listen(5000, () => {
    console.log("Server is listening...")
})