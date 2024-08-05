const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/home") {
    res.write("<html>");
    res.write("<body><h1>Welcome home</h1></body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/about") {
    res.end("<html><body><h1>Welcome to About Us page</h1></body></html>");
  } else if (req.url === "/node") {s
    res.end("<html><body><h1>Welcome to my Node Js project</h1></body></html>");
  } else {
    res.end("<html><body><h1>Page not found</h1></body></html>");
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}.`);
});
