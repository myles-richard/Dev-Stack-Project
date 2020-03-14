const db = require('../models');

const index = (req,res) => {
    db.Post.find({}, (err, allPosts) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    
        res.json(allPosts);
      });
};

const show = (req,res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if(err) return res.status(400).json({status: 400, error: 'Something went wrong please try again'});

        res.json(foundPost)
    })
};  

const create = (req,res) => {
    
    db.Post.create(req.body, (err, newPost) => {
        if(err) return res.status(400).json({status: 400, error: 'Something went wrong please try again'})

        db.User.findById(req.session.user, (err,foundUser) => {
            if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

            foundUser.posts.push(newPost);

            foundUser.save((err, savedUser) => {
                if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

                let resObj = {
                    _id: newPost._id,
                    title: newPost.title,
                    description: newPost.description,
                    languages: newPost.languages,
                    code: newPost.code,
                    name: foundUser.name                    
                };
                console.log(resObj);
                console.log(resObj._id.value)
                res.json(resObj)
            })
        })
    })
   
};

const update = (req,res) => {
    db.User.findOne({_id: req.session.user}, (err, foundUser) => { 
        if(err) return res.status(400).json({status: 400, error: 'Something went wrong please try again'});
        const updatePosting = foundUser.posts.id(req.params.id);
        
        updatePosting.title = req.body.title;
        updatePosting.description = req.body.description;
        updatePosting.languages = req.body.languages;
        updatePosting.code = req.body.code;

        foundUser.save()
    })
    
    
    db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatePost) => {
        if(err) return res.status(400).json({status: 400, error: 'Something went wrong please try again'})
        
         res.json(updatePost)
    })
};

const destroy = (req,res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if(err) return res.status(400).json({status: 400, error: 'Something went wrong please try again'});


        res.json({status: 200}) })
        }

module.exports = {
    index,
    create,
    show,
    update,
    destroy
}