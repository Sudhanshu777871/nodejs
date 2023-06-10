const http = require('http');
http.createServer((req,res)=>{
res.write("<h1>Hello World I am Sudhanshu Kumar</h1>");
res.end();
}).listen(7000);