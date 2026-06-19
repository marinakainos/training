const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World');
})

server.listen(5000, () => {
    console.log('Server listening at port 5000');
})




// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('This is my Home Page');
//     } else if(req.url.startsWith('/about')){

//         const url = new URL(req.url, `http://${req.headers.host}`)
//         console.log(url)
//         const params = url.searchParams
//         const name = params.get('name')
//         console.log(name)

//         res.end('This is my About Page');
//     } else if(req.url === '/contact'){
//         res.end('This is my Contact Page');
//     } else {
//         res.end('404, Resource Not Found');
//     }
// })


// sample app
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Welcome to Home Page');
//   } else if (req.url === "/about") {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('About Us Page');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Page Not Found');
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000/");
// });