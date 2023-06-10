const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/trial");

const mySchema = new mongoose.Schema({
  name: String,
  address: String,
  phoneNumber: Number,
  school: String,
});

// CODE FOR SAVE THE DATA

// const save=async()=>{
// let myModel = mongoose.model('products', mySchema);
// let data = new myModel({name:'Sudhanshu Kumar', address:'Vibhuti Khand-2 Gomti Nagar Lucknow', phoneNumber:8115830551, school:'SRMECEM'});
// let result = await data.save();
// console.log(result);
// }

// save();

// CODE FOR UODATING THE DATA

// const updating = async () => {
//   let myModel = mongoose.model("products", mySchema);
//   let data = await myModel.updateOne(
//     { phoneNumber: 8115830551 },
//     { $set: { name: "Enterprenure Sudhanshu Kumar" } }
//   );
//   console.log(data);
// };

// updating();


// CODE FOR FINDING ALL THE DATA

// const fetch=async()=>{
//     let myModel = mongoose.model('products', mySchema);
//     let fetching = await myModel.find({});
//     console.log(fetching);
// }

// fetch();

// CODE FOR DELETING THE DATA

const del = async()=>{
    let myModel = mongoose.model('products', mySchema);
    let deleting =await myModel.deleteOne({name:"Mahima Rawat"});
    console.log(deleting);
}
del();