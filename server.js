const express = require("express");
const path = require("path");
const app = express();

const _path = path.join(__dirname, "./dist");

app.use("/", express.static(_path));
app.listen(12010, () => {
  console.log("lazy 이미지버서: 12010 시작 http://127.0.0.1:12010");
});
