var path = require('path');
var exphbs = require('express-handlebars');
var app = require('./index');

app.engine('.html', exphbs({ extname: '.html', defaultLayout: 'main.html' }));
app.set('view engine', '.html');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, function() {
	console.log('http://localhost:3000');
});
