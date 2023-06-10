const fs =require("fs");
const path = require("path");
const pathname = path.join(__dirname,"files");
for (let i = 1; i <=5; i++) {
fs.writeFileSync(`${pathname}/myfile${i}.txt`,"This is an simple file");    
}

// code for reading the file
fs.readdir(pathname,((err, items)=>{
console.log(items);
}))