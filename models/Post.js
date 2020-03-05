const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: String, 
    description: String,
    languages: String,
    comments: [String],
    likes: Number, 
    code: String, 
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
},{ timestamps: true })

const Post = mongoose.model('Post', PostSchema)

module.exports = Post