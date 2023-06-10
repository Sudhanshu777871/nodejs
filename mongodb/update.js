const connecting = require('./config');


const upadte=async()=>{
let getFile = await connecting();
let updating = await getFile.updateMany({name:"Rishi Singh"}, {$set:{name:"Santosh Kumar", age:100}})
console.log(updating);
}

upadte();