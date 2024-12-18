const path = require("path");
const express = require("express");

const rootPath = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootPath, "views", "index.html"));
});

router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;
