const express = require('express');
const app = express();

// code for making app

app.get('',(req,res)=>{
res.send("This Is Home Page " + req.query.name);
});

app.get("/about",(req,res)=>{
res.send("<h1>This is about page</h1>");
});

app.get("/support",(req,res)=>{
    res.send("This Is Support Page");
});
app.listen(3000);