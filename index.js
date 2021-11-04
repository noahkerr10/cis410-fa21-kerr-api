const express = require("express");

const app = express();

app.listen(5001, () => {
  console.log(`app is running on port 5001`);
});

app.get("/hi", (req, res) => {
  res.send("hello good sir");
});

app.get("/", (req, res) => {
  res.send("API is running");
});
