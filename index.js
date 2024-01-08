const http = require("http");
const fs = require("fs");

const path = "./index.html";
const hostname = "127.0.0.1";
const port = 3000;

const readableStream = fs.createReadStream("./index.html");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  // res.end("Hello, World!");
  readableStream.on("error", (error) => {
    res.statusCode = 500;
    res.end("Internal server error");
  });
  readableStream.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
