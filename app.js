const express = require("express");
const slashRoutes = require('./routes/restaurant')
const locationRoutes = require('./routes/location')
const mealRoutes = require('./routes/mealtype')
const menuRoutes=require ('./routes/menu')
const routepayment=require('./routes/routepayments')
// const paymentRoute= require('./routes/payment')
//const PORT = 8083;
const PORT=process.env.PORT || 8083;
const bodyparser = require('body-parser')
const cors=require('cors')
require('dotenv').config();



//create express server
var app=express();

const mongoose = require('mongoose')


mongoose.connect(
    DBCONNECTIONSTRING,
    ()=>{
        console.log("mongodb connected")
    },
    e=>console.log(e)
)


const PORT=process.env.PORT || 6767;

var app=express()

//middleware routes 
app.use('/restaurants',slashRoutes)
app.use('/location',locationRoutes)
app.use('/mealtype',mealRoutes)
app.use('/menu',menuRoutes)
app.use('/pay',routepayment)

app.listen(PORT,()=>{
console.log(`app running on Port ${PORT}`)
})

