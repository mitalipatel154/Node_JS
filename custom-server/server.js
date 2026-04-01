const http = require("http");

const port = 8000;

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to Home Page!</h1>");
  }

  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1>");
  }

  else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Contact Page</h1>");
  }

  else if (req.url === "/services") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Service Page</h1>");
  }

  else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello...", status: "OK" }));
  }

  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }

});

server.listen(port, () => {
  console.log("Server is running at http://localhost:8000");
});