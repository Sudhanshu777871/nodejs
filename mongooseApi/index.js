const mongoose = require('mongoose');
require('./config');
const model = require('./model');
const express = require('express');
const app = express();
const mongodb = require('mongodb');

//  CODE FOR MAKING THE API
app.use(express.json());
// CODE FOR  MAKING THE API FOR INSERTING THE DATA INTO DATABASE
// app.post('',async(req, res)=>{
// let data = new model(req.body);
// let result = await data.save();
// res.send(result);
// console.log(result);
// })

// CODE FOR FETCHING ALL THE DATA FROM DATABASE
// app.get('',async(req,res)=>{
// let getFile = await model.find({});
// console.log(getFile);
// res.send(getFile);
// })

// // CODE FOR UPDATING THE FILES
// app.put('',async(req,res)=>{
//     let getFile = await model.updateOne({"address":"Jujoli"},{$set:{"address":"Dokiyad"}});
//     console.log(getFile);
//     res.send(getFile);
//     })

// CODE FOR DELETING THE DQATA
app.delete('',async(req,res)=>{
    let getFile = await model.deleteOne({_id:new mongodb.ObjectId(req.body.id)});
    console.log(getFile);
    res.send(getFile);
    })
app.listen(2300);