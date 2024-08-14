// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));

// app.use('/add-product', (req, res, next) => {
//   res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// });

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

// app.use('/', (req, res, next) => {
//   res.send('<h1>Hello from Express!</h1>');
// });

// app.listen(3000);

import express from 'express';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.use('/add-product', (req,res, next)=>{
  res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" min="20" max="48" name="size"><button type="submit">Add Product</button></form>')
});

app.post('/product', (req, res, next)=>{ 
  console.log(req.body);
  res.redirect('/add-product');
  
})

app.get('/', (req,res)=>{
  res.send('<h1>To fill the form go to this url : <a href="/add-product"><button>Add-Product</button></a></h1>');
})

app.listen(3000,()=>{
  console.log('Server is running on port 3000.');
  
});
