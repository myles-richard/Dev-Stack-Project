const db = require('../models');

const index = (req,res) => {
    db.User.find({}, (err, foundUsers) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    
        res.json(foundUsers);
      });
};

//create user
const create = (req,res) => {
    db.User.create(req.body, (err, newUser) => {
        if(err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

        res.json(newUser)
    })
}

//delete user
const destroy = (req,res) => {
    res.send('testing destroy user')
};


module.exports = {
    index,
    create,
    destroy,
}