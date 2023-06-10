const express = require("express");
require("./config");
const model = require("./model");
const app = express();
app.use(express.json());

app.get("/:key", async (req, res) => {
  let searching = await model.find({
    $or: [{ name: { $regex: req.params.key } }],
  });
  console.log(searching);
  res.send(searching);
});
app.listen(2300);
