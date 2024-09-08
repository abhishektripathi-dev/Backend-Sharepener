const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const shopController = require('../controllers/products')

const router = express.Router();

router.get('/', shopController.getProduct);

module.exports = router;
