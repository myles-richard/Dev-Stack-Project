const db = require('../models');
// const bcrypt = require('bcryptjs');


const auth = (req,res) => {
    console.log(req.session);
    db.User.findOne({ name: req.body.name}, (err, foundUser) => {
        if(err) return res.redirect(301, '/')
        if (foundUser == null)
            return res.status(400).json({status: 400, error: 'Something went wrong please try again'})
            
        console.log('User Found ',foundUser)
        // localStorage.setItem("name", foundUser.name)
            if (foundUser.password == req.body.password) {
                req.session.user = foundUser._id
                // req.cookie('userid', foundUser._id , { maxAge : 900000})
                // console.log('here')
                res.status(201).json({status:201,message:"logged in"})
            }
    } )
   
};

module.exports = {
    auth,
}