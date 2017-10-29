function loadRoutes(app) {
  app.get('/', function(req, res) {
    res.render('index', { currentDate: new Date().toLocaleDateString() });
  });

  app.post('/session', function(req, res) {
    res.send('12345');
  });

  app.use('/issues', require('./issue'));
}

module.exports = loadRoutes;
