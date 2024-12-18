const path = require("path");
const express = require("express");

const adminRoutes = require("./router/admin");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(adminRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
