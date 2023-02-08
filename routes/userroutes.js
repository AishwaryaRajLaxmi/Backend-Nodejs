const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");

//createUser
router.post("/adduser", userController.AddUser);

module.exports = router;
