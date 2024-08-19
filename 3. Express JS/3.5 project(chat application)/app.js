const express = require('express');
const bodyParser = require('body-parser');
const routerLogin = require('./routes/login');
const routerMsg = require('./routes/message')


const app = express();


app.use(bodyParser.urlencoded({extended:true}));


app.use(routerLogin)
app.use(routerMsg)


const PORT = 4000;

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}.`)
})