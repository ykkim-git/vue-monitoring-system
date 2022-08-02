const http = require("http");
const PORT = 12010;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  const obj = {
    name: "jay",
  };
  res.end(JSON.stringify(obj));
});

setTimeout(() => {
  // 에러를 발생시켜서 1초마다 서버가 중지되게 만들기
  JSON.parse("{Z");
}, 1000);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
