const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "portpro_test",
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Database is Connected");
});

module.exports = db;
