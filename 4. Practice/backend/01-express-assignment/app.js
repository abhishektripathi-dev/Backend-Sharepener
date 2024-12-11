const path = require("path");

const express = require("express");

const rootDir = require("./util/path");

// routes file
// const mainRoutes = require("./routes/main");
// const userRoutes = require("./routes/user");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/user", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "user.html"));
});

app.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "index.html"));
});

app.listen(3000);
