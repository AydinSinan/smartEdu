const express = require("express");
const router = express.Router()

const courseController = require("../contollers/courseController");

router.route('/').post(courseController.createCourse); // http://localhost:3000/courses 
router.route('/').get(courseController.getAllCourses)
router.route('/:id').get(courseController.getCourse)
module.exports = router;