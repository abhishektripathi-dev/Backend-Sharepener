const express = require('express');

const router = express.Router();

router.get("/login", (req, res, next) => {
    res.send(`<form action="/login" method="post" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
        <input type="text" name="username" placeholder="username" id="username">
        <br>
        <input type="submit" value="Login">
    </form>`);
});

router.post("/login", (req, res, next) => {
    const { username } = req.body;
    console.log(username);
    // ... rest of the code ..

    res.status(302).redirect("/");
});


module.exports = router;