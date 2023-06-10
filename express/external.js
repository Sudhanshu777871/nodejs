const express = require("express");
const app = express();
const path = require("path");
const completPath = path.join(__dirname, "pages");

// code for making the file un the pages through express js file
app.get("", (req, res) => {
  res.sendFile(`${completPath}/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${completPath}/about.html`);
});

app.get("/support", (req, res) => {
  res.sendFile(`${completPath}/support.html`);
});


app.get("*", (req, res) => {
    res.sendFile(`${completPath}/error.html`);
  });
app.listen(3200);
