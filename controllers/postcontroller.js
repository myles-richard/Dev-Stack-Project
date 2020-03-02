const db = require('../models');
const Post = require('../models/Post')

const index = (req,res) => {
    // db.Post.find({}, (err, allPosts) => {
    //     if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    
    //     res.json(allPosts);
    //   });
    res.send('testing index')
};

const show = (req,res) => {
    res.send('testing show')
};
const create = (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    // res.send('testing create')
    res.json(post)
};

const update = (req,res) => {
    res.send('testing update')
};

const destroy = (req,res) => {
    res.send('testing destroy')
}


module.exports = {
    index,
    create,
    show,
    update,
    destroy
}