const express = require("express");
const app = express();
const PORT = 3000;

// app.use: HTTP 요청에 대한 미들웨어
app.use((req, res, next) => {
  // 1번 로직
  console.log("1 Time: ", Date.now());
  // next(): 다음 미들웨어로 넘겨주는 함수
  next();
});

app.use((req, res, next) => {
  // 2번 로직
  console.log("2 Time: ", Date.now());
  next();
});

app.listen(PORT, () => {
  console.log(`서버가 생성되었습니다. ${PORT}`);
});

