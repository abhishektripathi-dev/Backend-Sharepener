const express = require('express');

const router = express.Router();

const contactusController = require('../controllers/contact')

router.get('/contactus', contactusController)

module.exports = router;