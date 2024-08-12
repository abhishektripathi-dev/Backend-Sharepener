import express from 'express';

const app= express();
const port = 8080;

app.use((req, res, next)=>{
  console.log('This is first middleware.');
  next();
})

app.use((req, res, next)=>{
  console.log("this is another middle ware");
  res.send('<h1>Hello World!</h1>');
  next()
})

app.listen(port, ()=>{
  console.log(`Server is runniung on port ${port}.`);
  
})