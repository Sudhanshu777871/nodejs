const connect = require('./config');
const express = require('express');
const app = express();

////
app.use(express.json());
app.post('',async(req,res)=>{
    let data = await connect();
    data =await data.insertOne(req.body);
    res.send(data);
})
app.listen(5600);