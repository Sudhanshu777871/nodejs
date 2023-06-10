const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Hello World This is home page");
});

app.get("/about", (req, res) => {
  res.send("Hello This is about page");
});

app.get("*", (req, res) => {
  res.send("Hello, This is default page....");
});
app.listen(2300);
