const express = require('express')
const app = express()
const path = require('path');
const port = 3000

// static middleware
// By default express.static look path from start server file.
// app.use(express.static('public'));

// can include file from other scope

app.use(express.static(path.join(__dirname, 'public')));
console.log(path.extname('index.html'));

// Route
app.get('/', function (req, res) {
    res.send('Got a Get request')
});

app.post('/', function (req, res) {
    res.send('Got a POST request')
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
