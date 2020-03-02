const db = require('express');

const User = require('../models/User');


// All users
const index = (req,res) => {
    res.send('testing users controller')
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
    index,
    create,
    destroy,
}