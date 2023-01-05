const express = require("express");
const router = express.Router()

const authController = require("../controllers/authController");

router.route('/signUp').post(authController.createUser); // http://localhost:3000/users/signUp 
router.route('/login').post(authController.loginUser); // http://localhost:3000/users/login 

module.exports = router;