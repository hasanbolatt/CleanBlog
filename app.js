const express = require('express'); 
const mongoose = require('mongoose');
const path = require('path');
const Photo = require('./models/Blog');
const ejs = require('ejs');
const Blog = require('./models/Blog');
const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.static('public'));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

/*app.get('/',(req,res)=>{
    const blog = {
        id: 1,
        title: "Blog title",
        description: "Blog description"
      }
      res.send(blog);
})*/

app.get('/', async (req, res) => {
    const blogs = await Blog.find({})
    res.render('index', {
      blogs
    });
})

app.get('/posts/:id',async(req,res)=>
{
    //console.log(req.params.id);
    //res.render('about');

    const blog = await Blog.findById(req.params.id);
    res.render('post',{
      blog
    })
})

app.get('/about',(req,res)=>
{
    res.render('about');
})

app.get('/add_post', (req, res) => {
  
    //res.sendFile(path.resolve(__dirname,'temp/index.html'));
    res.render('add_post');
  })

app.post('/blogs', async(req, res) => {
  
    //res.sendFile(path.resolve(__dirname,'temp/index.html'));
    await Blog.create(req.body);
    res.redirect('/');
  })

const port = 4000;

app.listen(port,()=>
{
    //parantezi `` olarak aç..
    console.log(`Sunucu ${port} de çalışmaya başladı`);
})