const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.post("/add-item",(req, res, next) => {
    console.log(req.body);
});

app.listen(3000);
