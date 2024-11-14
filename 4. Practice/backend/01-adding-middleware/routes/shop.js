const path = require("path");

const express = require("express");

const rootFile = require('../util/path')

const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootFile, 'views', 'shop.html'));
});

module.exports = router;
