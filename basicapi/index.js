const connect = require("./config");
const express = require("express");
const app = express();

app.get("", async (req, res) => {
  let data = await connect();
  data = await data.find({school:"SRMCEM"}).toArray();
  res.send(data);
});

app.listen(2300);
