const express = require("express");
const app = express();
const path = require("path");
const completePath = path.join(__dirname, "web");
/// code for making the website through files

app.get("", (req, res) => {
  res.sendFile(`${completePath}/index.html`);
});

app.get("/help", (req, res) => {
  res.sendFile(`${completePath}/help.html`);
});

app.get("/support", (req, res) => {
  res.sendFile(`${completePath}/support.html`);
});


app.get("*", (req, res) => {
    res.sendFile(`${completePath}/error.html`);
  });
app.listen(3200);