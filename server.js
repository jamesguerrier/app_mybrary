
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
require('dotenv').config();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', './layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use('/', indexRouter)
app.use('/authors', authorRouter)

port = process.env.PORT || 5000;

const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI);
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongodb'))


app.listen(port, () => {
    console.log(`the app is running in port ${port}`)
})