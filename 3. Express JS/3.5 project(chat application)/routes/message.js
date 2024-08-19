
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.use(express.urlencoded({ extended: true }));


router.get('/', (req, res, next) => {
  fs.readFile('message.txt', 'utf8', (err, data) => {
  
    res.send(`<pre>${data}</pre>
      <form action="/save-msg" method="post" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
      <input type="text" name="message" id="message" placeholder="message">
      <input type="hidden" name="username" id="username">
      <button type="submit">Send Message</button>
    </form>`);
  });
 
});

// Save the message and username
router.post('/save-msg', (req, res, next) => {
  const { message, username } = req.body;

  if (message && username) {
    const formattedMessage = `${username}: ${message}`;

    fs.appendFile('message.txt', formattedMessage + '\n', (err) => {
      if (err) {
        console.error('Error saving message:', err);
      } else {
        console.log('Message saved');
      }
    });

    res.redirect('/');
  } else {
    res.status(400).send('Username or message is missing');
  }
});



module.exports = router;


