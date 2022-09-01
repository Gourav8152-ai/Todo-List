//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");



// deleteIcon.on
let items = ["Buy food","Cook Food","Eat Food"];
let workItems = [];
app.get("/",function(req,res){  
    let day = date();
    res.render('list',{listTitle : day, newListItems: items});
});

app.get("/work",function(req,res){
    res.render('list',{listTitle : 'Work Day', newListItems: workItems})  
})

// app.post("/work",function(req,res){
//     res.re
// })
app.get("/about",function(req,res){
    res.render("about");
})

app.post("/",function(req,res){
    console.log(req.body);
    let item = req.body.newItem;
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
})

app.listen(3000,function(){
    console.log("Server is running at port 3000");
})

