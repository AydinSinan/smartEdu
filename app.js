const express= require('express');
const mongoose = require("mongoose");
const session = require("express-session")

const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute")

const app = express();

// Connect DB
mongoose.connect('mongodb://127.0.0.1/smartedu-db', {

}).then(() => {
    try {
        console.log('DB Connected Successfuly')
    } catch (err) {
        throw new Error(err)
    }
})

// Template Engine
app.set("view engine", "ejs");

// Global Variables
global.userIN = null;

// Middlewares

app.use(express.static("public"))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))


// Routes
app.use('*', (req, res, next)=> {
    userIN = req.session.userID;
    next();
})
app.use("/", pageRoute)
app.use("/courses", courseRoute)
app.use("/categories", categoryRoute)
app.use("/users", userRoute)

const port = 3000;
app.listen(port, () => {
    console.log(`App started at port: ${port}`);
})