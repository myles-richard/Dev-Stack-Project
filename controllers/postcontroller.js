const db = require('../models');

const index = (req,res) => {
    db.Post.find({}, (err, allPosts) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    
        res.json(allPosts);
      });
};

const show = (req,res) => {
    // db.User.findById(req.session.user)
    db.Post.findById(req.params.id, (err, foundPost) => {
        if(err) return res.status(400).json({status: 400, error: 'Something went wrong please try again'});

        res.json(foundPost)
    })
};  

const create = (req,res) => {
    console.log(req.session.user)
    db.Post.create(req.body, (err, newPost) => {
        if(err) return res.status(400).json({status: 400, error: 'Something went wrong please try again'})

        res.json(newPost)
    })
   
};

const update = (req,res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatePost) => {
        if(err) return res.status(400).json({status: 400, error: 'Something went wrong please try again'})

        res.json(updatePost)
    })
};

const destroy = (req,res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if(err) return res.status(400).json({status: 400, error: 'Something went wrong please try again'});

        res.json(deletedPost)
    })
}

module.exports = {
    index,
    create,
    show,
    update,
    destroy
}