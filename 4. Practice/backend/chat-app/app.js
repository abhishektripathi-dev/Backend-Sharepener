const fs = require("fs");
const path = require("path");

const express = require("express");

const loginRoutes = require("./routers/login");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(loginRoutes);

app.get("/", (req, res, next) => {
    res.send(`<form action="/save" method="post"
        onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
        <input type="text" name="message" id="message" placeholder="message">
        <input type="hidden" name="username" id="username">
        <br>
        <button type="submit">Send Message</button>
    </form>`);
});

app.post("/save", (req, res, next) => {
    console.log(req.body);
    const { username, message } = req.body;
    fs.appendFile("message.txt", `${username}: ${message} \n`, function (err) {
        if (err) throw err;
        console.log("Saved!");
    });
    console.log(username, message);
    res.redirect("/");
});

app.listen(3000);
