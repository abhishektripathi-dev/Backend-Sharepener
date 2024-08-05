const http = require("http");

const server = http.createServer((req, res)=>{
  console.log("Abhishek Tripathi");
});

server.listen(4000);