const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === "/") {
        res.end("Main page");
    } else if (req.url === "/about") {
        res.end("About me");
    } else if (req.url == "/contact") {
        res.end("Contact us");
    } else if (req.url.startsWith("/createFile")) {
        const url = new URL(req.url, `http://${req.headers.host}`)
        let data = url.searchParams.get("content");

        fs.writeFile('./myFile.txt', data, (err)=> {
            if(err){
                console.log(err);
                return;
            } else {
                console.log('Writen to file successfully!');
            }
        })

        res.end(`I want to create myFile.txt and add "${data}" to it`)
    }
    else {
        res.end("404 not found")
    }
})

server.listen(5000, () => {
    console.log("Server is listening...")
})