const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./app/routes');

app.use(bodyParser.urlencoded({ extended: true }));

app.engine(
  '.html',
  exphbs({
    extname: '.html',
    defaultLayout: 'main.html',
    layoutsDir: 'app/views/layouts/',
    partialsDir: 'app/views/partials/',
    helpers: {
      isSelected: (val1, val2, className) => val1 === val2 && className,
      equal: (val1, val2, options) => val1 === val2 ? options.fn(this) : null
    }
  })
);
app.set('view engine', '.html');
app.set('views', path.join(__dirname, 'app', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
routes(app);

module.exports = app;
