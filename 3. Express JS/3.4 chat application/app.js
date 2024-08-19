import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/login',(req, res)=>{
  res.send('<form action="/" method="post"><input type="text" name="username"><button type="submit">Login</button></form>');
})

app.post('/',(req, res)=>{
  console.log(req.body);
  localStorage.setItem('username', req.body.username);
  res.redirect('/')
})

app.get('/',(req, res)=>{
  res.send('hello world!')
})

app.use((req, res, next)=>{
  res.status(404).send('<h1>Page not found</h1>');
})

const port = 3000;
app.listen(port, ()=>{
  console.log(`Server is running on port ${port}.`);
  
})
