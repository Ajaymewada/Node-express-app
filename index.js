// const http = require('http')
// const hostname = '127.0.0.1';
// const port = 3000;
import http from "http";
http.createServer((req, res) => {
  res.write("Hello Ajay");
  res.end()
}).listen(80)

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import express from "express";
// var app = express();

// app.get("/",(req,res) => {
//     res.send("Hey Hi!!")
// })

// app.listen(80,() => {
//   console.log("Server is running on port number 80");
// })