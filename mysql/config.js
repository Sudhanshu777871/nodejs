const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sk",
});

// code forchecking that database is connected or not

module.exports = conn;
