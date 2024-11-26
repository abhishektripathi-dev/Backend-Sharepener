const express = require("express");

const app = express();

app.use('/add-product', (req, res, next)=>{
    console.log("this is middleware for add-product route")
    res.send('<h1>This is add-product</h1>')
})


app.use('/', (req, res, next)=>{
    console.log("this is middle ware for all routes")
    // next()
})


// handling different routes

app.listen(3000);
