const mongoose = require('mongoose')
const Post = require('./Post')

const UserSchema = new mongoose.Schema({
    name: String, 
    email: String,
    location: String, 
    languages: [String],
    github: String,
    work: String, 
    posts: [Post.schema],
    photo: String,
})

module.exports = mongoose.model('User', UserSchema)