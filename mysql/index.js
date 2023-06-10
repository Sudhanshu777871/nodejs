const conn = require('./config');
// code for running query
conn.query("select * from sk_msg",(err,succ)=>{
console.log(succ);
})