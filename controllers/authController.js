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