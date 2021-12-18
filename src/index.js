const express=require('express');
let app=express();


const Razorpay=require('razorpay');
require('dotenv').config();

const razorpay= new Razorpay({
    key_id:process.env.KEY_ID,
    key_secret:process.env.KEY_SECRET
})



const path=require('path');
app.use(express.json());


app.set('view engine','ejs');

app.use(express.static("public"))



const mycartController =require('./controllers/Mycart.controller');
const productController = require('./controllers/products.controller');

app.use("/mycarts",mycartController);
app.use("/products",productController);


app.get("/payment",(req,res) => {
    res.render("pay");
})

app.get("/care",(req,res) => {
    res.render("care");
})
app.get("/home",(req,res) => {
    res.render("home");
})
app.get("/desc",(req,res) => {
    res.render("descPage");
})
app.get("/eat",(req,res) => {
    res.render("eat_order");
})
app.get("/eat_meal",(req,res) => {
    res.render("eat_meal");
})
app.get("/gym",(req,res) => {
    res.render("gym");
})
app.get("/menstore",(req,res) => {
    res.render("mens-store");
})
app.get("/mindfulness",(req,res) => {
    res.render("mindfulnessPage");
})
app.get("/onlinept",(req,res) => {
    res.render("onlinept");
})
app.get("/productdisplay",(req,res) => {
    res.render("product_display");
})
app.get("/store",(req,res) => {
    res.render("store");
})
app.get("/therapy",(req,res) => {
    res.render("therapyPage");
})
app.get("/products",(req,res) => {
    res.render("products");
})

app.post("/order",(req,res) => {
    
    let options={
        amount: 50000,
        currency: "INR",
        receipt: "receipt#1",
        // notes: {
        //     key1: "value3",
        //     key2: "value2"
        // }
    }
    console.log("options",options);
    razorpay.orders.create(options, function(err, order) {
        console.log(order);
        res.json(order);
    })
})

module.exports =app;