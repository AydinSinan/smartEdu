const session = require("express-session")
const bcrypt = require("bcrypt");
const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
    const user = await User.create(req.body); // Category = model
        res.status(200).json({
            status: 'success',
            user
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    } 
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email: email});
        let same = await bcrypt.compare(password, user.password)
        if(same){
            // User SESSION
            req.session.userID = user._id
            res.status(200).redirect("/"); 
        } else{ 
            
            res.send('Geçersiz');
        }
    } 
/*  try {
        const { email, password } = req.body;
        await User.findOne({ email }, (err, user) => {
                if (user) {
                    bcrypt.compare(password, user.password, (err, same) => {
                        if (same) {
                            // USER SESSION
                            res.status(200).send('YOU ARE LOGGED IN');
                        }
                    });
                }
        }); 
    }*/
    catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    } 
}