const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const employeeRoutes = require('./routes/routes');

mongoose.set('useFindAndModify', false);
mongoose.set('debug', true)

// mongodb connection test
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database is connected')
});

// initiate express app
const app = express()

// load body parser module
app.use([bodyParser.json(), bodyParser.urlencoded({ extended: false })]);

// load .env
const port = process.env.PORT || 5000


app.use('/app/employee', employeeRoutes);



// start server at given port
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
