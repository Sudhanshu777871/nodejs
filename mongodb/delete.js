const del = require('./config.js');

const  deleting= async()=>{
let getFile =await del();
let deleting = await getFile.deleteMany({address:"Mumbai"});
if(deleting.acknowledged){
    console.log("Deleted SuccessFully...");
}
}
deleting();