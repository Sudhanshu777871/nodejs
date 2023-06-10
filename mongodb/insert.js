const connect = require('./config.js');
 

const inserting=async()=>{
let getFun = await connect();
let insert =await getFun.insertMany([
    {
    name:"Rishabh Singh",
    age:19,
    School:"City College",
    address:"Jujoli"
},
{
    name:"Priya Singh",
    age:19,
    School:"City College",
    address:"Jujoli"
}
,
{
    name:"PriRinkuKumari",
    age:19,
    School:"City College",
    address:"Jujoli"
}
]);
console.log(insert);
}

inserting();