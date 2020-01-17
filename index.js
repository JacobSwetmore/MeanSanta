const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Merry Christmas or something!' })
});
app.get('/login', (req, res) => res.send('Welcome to secret <b>login</b> page'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));