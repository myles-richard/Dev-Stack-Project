const db = require('../models');

const User = require('../models/User');


// show users by ID
const show = (req,res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    
        res.json(foundUser);
      });
    // res.send('testing users controller')
};

//create user
const create = (req,res) => {
    res.send('testing create')
}

//delete user
const destroy = (req,res) => {
    res.send('testing destroy user')
};


module.exports = {
    show,
    create,
    destroy,
}