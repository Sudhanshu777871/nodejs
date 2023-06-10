// const http = require('http');
// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-type':'application\json'});
// res.write(JSON.stringify({name:"Sudhanshu Kumar",age:18, address:"Lucknow"}));
// res.end();
// }).listen(2100);


// code for creating the file

// const fs = require('fs');
// const path = require('path');
// const complatePath = path.join(__dirname, "pages");
// for (let i = 1; i <=5; i++) {
// fs.writeFileSync(`${complatePath}/hello${i}.txt`,"Helllo world i am sudhanshu kumar from india");    
// }


// code for creating the pages 
// const express = require('express');
// const app = express();

// app.get('',(req,res)=>{
// res.send("Hello world I am Sudhanshu Kumar");
// })
// app.get('/about',(req,res)=>{
//     res.send("Hello World This Is About Page");
// })
// app.get('/support',(req,res)=>{
// res.send("Hello World This Is Support Page");
// });
// app.listen(4500);

// code for making the webspage through nodejs and file get from the other folder

// const express = require('express');
// const app = express();
// const path = require('path');
// const completePath = path.join(__dirname, "pages");

// app.use(express.static(completePath));
// app.listen(5600);