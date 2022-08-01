const http = require("http");
const PORT = 12010;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  const obj = {
    name: "jay",
  };
  res.end(JSON.stringify(obj));
});

server.listen(PORT, () => {
  console.log(`Server is running at http:127.0.0.1:${PORT}`);
});
