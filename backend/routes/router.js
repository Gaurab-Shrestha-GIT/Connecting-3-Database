const express = require("express");
const {
  getDataFromMySql,
  getDataFromMongoDB,
  getDataFromFireBase,
} = require("../controller/controller");

const router = express.Router();

router.route("/v1/user").get(getDataFromMySql);
router.route("/v2/user").get(getDataFromMongoDB);
router.route("/v3/user").get(getDataFromFireBase);

module.exports = router;
