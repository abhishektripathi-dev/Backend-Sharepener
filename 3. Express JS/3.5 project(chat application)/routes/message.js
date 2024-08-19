// const express = require('express');
// const fs = require('fs');

// const router = express.Router();


// router.get('/', (req, res, next)=>{
//   res.send(`<form action="/save-msg" method="post" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
//   <input type="text" name="message" id="message" placeholder="message">
//   <input type="hidden" name="username" id="username">
//   <button type="submit">Send Message</button>
// </form>`)
// })

// let msg = [];

// router.post('/save-msg', (req, res, next)=>{
//   console.log(req.body)
//   msg.push(`${req.body.message} : ${req.body.username}`);
//   console.log(msg)
//   fs.writeFile('message.txt',msg, ()=>{
//     console.log('Saved')
//   })
// })



// module.exports = router;

const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.use(express.urlencoded({ extended: true }));

// Serve the message form
router.get('/', (req, res, next) => {
  fs.readFile('message.txt', 'utf8', (err, data) => {
    // if (err) {
    //   res.status(500).send('Error reading messages');
    //   return;
    // }
    res.send(`<pre>${data}</pre>
      <form action="/save-msg" method="post" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
      <input type="text" name="message" id="message" placeholder="message">
      <input type="hidden" name="username" id="username">
      <button type="submit">Send Message</button>
    </form>`);
  });
  // res.send(`
  //   <form action="/save-msg" method="post" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
  //     <input type="text" name="message" id="message" placeholder="message">
  //     <input type="hidden" name="username" id="username">
  //     <button type="submit">Send Message</button>
  //   </form>
  // `);
});

// Save the message and username
router.post('/save-msg', (req, res, next) => {
  const { message, username } = req.body;

  if (message && username) {
    const formattedMessage = `${username}: ${message}`;

    // Write to file
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

// Serve the saved messages
// router.get('/messages', (req, res, next) => {
//   fs.readFile('message.txt', 'utf8', (err, data) => {
//     if (err) {
//       res.status(500).send('Error reading messages');
//       return;
//     }
//     res.send(`<pre>${data}</pre>`);
//   });
// });

module.exports = router;


