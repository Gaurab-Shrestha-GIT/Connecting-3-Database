const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: process.env.LOCAL_HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.database,
});

if (db) {
  console.log("MySql Database is Connected");
} else {
  console.log(error);
}

module.exports = db;
