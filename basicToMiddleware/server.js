const http = require('http');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify({name:"Sudhanshu Kumar",age:18, address:"Luckmow", mobileNumber:8115830551}));
res.end();
}).listen(2800);