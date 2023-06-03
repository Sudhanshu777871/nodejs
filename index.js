const http = require('http');
const data = require('./data');
http.createServer((req,res)=>{
res.writeHead(200, {'Content-Type':'application\json'});
res.write(JSON.stringify(data.completeDetails()));
res.end();
}).listen(2500);