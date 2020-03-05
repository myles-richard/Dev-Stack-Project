const mongoose = require('mongoose')
const Post = require('./Post')

const UserSchema = new mongoose.Schema({
    name: String, 
    email: String,
    password: String,
    location: String, 
    github: String,
    work: String, 
    languages: [String],
    posts: [Post.schema],
    photo: String,
})

module.exports = mongoose.model('User', UserSchema)