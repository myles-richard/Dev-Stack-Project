const db = require('../models');
const Post = require('../models/Post')

const index = (req,res) => {
    db.Post.find({}, (err, allPosts) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    
        res.json(allPosts);
      });
    // res.send('testing index')
};

const show = (req,res) => {
    // db.Post.find({}, (err, allPost) => {
    //     if(err) return res.json(err)

    //     res.json(allPost)
    // })
};  

const create = (req,res) => {
    db.Post.create(req.body, (err, newPost) => {
        if(err) return res.json(err)

        res.json(newPost)
    })
   
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