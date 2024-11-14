const path = require("path");

const express = require("express");

const rootFile = require("../util/path");

const router = express.Router();

router.use((req, res, next) => {
    res.sendFile(path.join(rootFile, "views", "404.html"));
});

module.exports = router;
