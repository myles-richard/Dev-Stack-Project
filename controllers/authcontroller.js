const db = require('../models');


const auth = (req,res) => {
    console.log(req.session);
    db.User.findOne({ name: req.body.name}, (err, foundUser) => {
        if(err) return res.redirect(301, '/')
        if (foundUser == null)
            return res.status(400).json({status: 400, error: 'Something went wrong please try again'})
            
            if (foundUser.password == req.body.password) {
                req.session.user = foundUser._id
        
                res.status(201).json({status:201,message:"logged in"})
            }
    })
   
};

module.exports = {
    auth,
}