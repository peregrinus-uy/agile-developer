const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const routes = require('./routes');

app.engine('.html', exphbs({ extname: '.html', defaultLayout: 'main.html' }));
app.set('view engine', '.html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(process.cwd() + '/public'));
routes(app);

app.listen(3000, function() {
  console.log('http://localhost:3000');
});
