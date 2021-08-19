const express = require('express'); 
const path = require('path');
const ejs = require('ejs');

const app = express();
app.use(express.static('public'));
app.set("view engine","ejs");

/*app.get('/',(req,res)=>{
    const blog = {
        id: 1,
        title: "Blog title",
        description: "Blog description"
      }
      res.send(blog);
})*/

app.get('/',(req,res)=>
{
    res.render('index');
})

app.get('/about',(req,res)=>
{
    res.render('about');
})

app.get('/add_post',(req,res)=>
{
    res.render('add_post');
})

const port = 4000;

app.listen(port,()=>
{
    //parantezi `` olarak aç..
    console.log(`Sunucu ${port} de çalışmaya başladı`);
})