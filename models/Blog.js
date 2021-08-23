const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const blogSchema = new Schema({
    title:String,
    detail:String,
    image: String,
    
    //yükleme tarihi.
    dateCreated:{
        type:Date,
        default:Date.now
    },
})

//create model
const Blog = mongoose.model('Blog',blogSchema)

module.exports = Blog;