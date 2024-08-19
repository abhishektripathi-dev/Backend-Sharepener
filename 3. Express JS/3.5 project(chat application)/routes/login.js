const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next)=>{
  res.send(`<form action="login-submit" method="post" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
  <input type="text" name="username" id="username">
  <button type="submit">Login</button>
</form>`)
})

router.post('/login-submit', (req, res, next)=>{
  console.log(req.body);
  res.status(302).redirect('/');
})



module.exports = router;

