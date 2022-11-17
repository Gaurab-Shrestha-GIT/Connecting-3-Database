const mysqldb = require("../database/mysqldb");
const { db } = require("../database/mongodb");
const User = require("../model/UserModel");
const firebaseDB = require("../database/firebasedb");

//controller for getting data from mysql database
const getDataFromMySql = async (req, res) => {
  try {
    mysqldb.query("SELECT * from user", (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

//controller for getting data from mongodb
const getDataFromMongoDB = async (req, res) => {
  try {
    User.find({}, (err, result) => {
      if (err) {
        res.send(err);
      }
      res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
};

//controller for getting data from firebase
const getDataFromFireBase = async (req, res) => {
  try {
    const data = firebaseDB.collection("Users");
    const snapshot = await data.get();
    const allData = snapshot.docs.map((doc) => {
      return doc.data();
    });
    return res.json(allData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getDataFromMySql,
  getDataFromMongoDB,
  getDataFromFireBase,
};
