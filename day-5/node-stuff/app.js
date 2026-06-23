const http = require('http');

const server = http.createServer((req, res) => {

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

server.listen(3000, () => {
    console.log("Server is listening...")
})