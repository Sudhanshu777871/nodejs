const connect = require('./config.js');

// making function for fetching the data
async function fetch(){
  let getCollection = await connect();
  let result = await getCollection.find({}).toArray();
  console.log(result);
}

fetch();