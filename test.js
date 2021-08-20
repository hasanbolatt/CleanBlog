const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/cleanblog-test-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log("Database oluştu");

const BlogSchema = new Schema({
    title:String,
    detail:String,
    //yükleme tarihi.
    dateCreated:{
        type:Date,
        default:Date.now
    },
});

//create model
const Blog = mongoose.model('Blog',BlogSchema);