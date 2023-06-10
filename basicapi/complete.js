const connect = require("./config");
const express = require("express");
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

// code for fetching the data
app.get("", async (req, res) => {
  let data = await connect();
  data = await data.find({}).toArray();
  res.send(data);
});

// code for inserting the data
app.post("", async (req, res) => {
  let data = await connect();
  data = await data.insertOne(req.body);
  res.send(req.body);
});


// code for updating the data
app.put("", async (req, res) => {
    let data = await connect();
    data = await data.updateOne({name:req.body.name},{$set:req.body});
    res.send(req.body);
  });


  // code for updating the data
app.delete("", async (req, res) => {
    let data = await connect();
    data = await data.deleteOne({_id: new mongodb.ObjectId(req.body.id)});
    res.send(data);
  });
app.listen(5600);

