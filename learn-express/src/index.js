import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(() => {
  console.log("server listen");
});

app.listen(8000, () => {
  console.log("port : 8000");
});
