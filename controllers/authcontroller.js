const db = require('../models');
// const bcrypt = require('bcryptjs');


const auth = (req,res) => {
    console.log('authenticating user');
    db.User.findOne({ name: req.body.name}, (err, foundUser) => {
        if(err) return res.redirect(301, '/')
        if (foundUser == null)
            return res.redirect(301, '/')
        console.log('User Found ',foundUser)
            if (foundUser.password === req.body.password) {
                // req.cookie('userid', foundUser._id , { maxAge : 900000})
                console.log('here')
                res.redirect(301,'/home')
            }
    } )
   
};

module.exports = {
    auth,
}