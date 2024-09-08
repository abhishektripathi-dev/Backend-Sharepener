const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/404')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contactus')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData);
app.use(shopRoutes);

app.use(contactUsRoutes)

app.use(errorController);

app.listen(3000);
