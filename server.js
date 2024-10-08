
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')
require('dotenv').config();
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', './layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use('/', indexRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter)

port = process.env.PORT || 5000;

const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI);
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongodb'))


app.listen(port, () => {
    console.log(`the app is running in port ${port}`)
})