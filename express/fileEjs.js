const express = require('express');
const app = express();

app.set('view engine','ejs');
app.get('',(req,res)=>{
    const details={
        name:"Sudahsnhu Kumar",
        age:18, 
        address:"Lucknow",
        phoneNuMBER:8115830551,
        city:"Lucknow",
        subject:["Hindi", "English","Science","Socail Science"]
    }
res.render('index', {details});
});

app.listen(2300);