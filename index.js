// const http = require('http')
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World! NodeJS \n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

import express from "express";
var app = express();

app.get("/",(req,res) => {
    res.send("Hey Hi!!")
})

app.listen(80,() => {
  console.log("Server is running on port number 5001");
})