const express = require("express");
const router = express.Router()

const pageController = require("../contollers/pageController");

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);

module.exports = router;