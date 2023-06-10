const {MongoClient} = require('mongodb');
const dbName ='trial';
const collName ='products';
const url ='mongodb://0.0.0.0:27017/';
const clinet = new MongoClient(url);

// code for making function for common
async function connecting(){
let connects = await clinet.connect();
let dbConnect = connects.db(dbName);
const collConnect = dbConnect.collection(collName);
return collConnect;
}


// exportin the modules
module.exports = connecting;
