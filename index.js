const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const monk = require('monk');
const url = 'localhost:27017/MeanSanta';
const db = monk(url);

const users = db.get('users');

var userGUID


app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {title: 'Hey', message: 'Merry 2020 or something!'});
});
app.get('/login', (req, res) => res.send('Welcome to secret <b>login</b> page'));

app.get('/users', (req, res) => {
    users.find({},)
        .then((users) => {
            res.render('users', {title: 'Users', users: users});
        })
});

app.get('/users/:userId', (req, res) => {
    users.findOne({_id : req.params.userId},)
        .then((user) => {
            res.render('user', {title: 'User', userName: user.name, userOccupation: user.occupation});
        })
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



