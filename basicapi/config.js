const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017/';
const databaseName = 'trial';
const collectionName = 'products';
const client = new MongoClient(url);
// connecting
const connect = async()=>{
let connecting = await client.connect();
let dbConnect = connecting.db(databaseName);
let collConnect = dbConnect.collection(collectionName);
return collConnect;
}


module.exports = connect;