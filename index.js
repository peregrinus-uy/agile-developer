var express = require('express');
var app = express();
var db = require('./datastore/db');

app.use(express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.render('index', { currentDate: new Date().toLocaleDateString() });
});

app.post('/session', function(req, res) {
  res.send('12345');
});

app.get('/user', function(req, res) {
  const users = db.getAll();
  res.render('users', { users });
});

app.get('/user/:id', function(req, res) {
  const user = db.get(req.params.id);
  res.render('user', { user });
});

module.exports = app;
