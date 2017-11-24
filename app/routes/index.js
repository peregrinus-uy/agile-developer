function loadRoutes(app) {
  app.get('/', function(req, res) {
    res.render('index', { layout: false });
  });

  app.use('/dashboard', require('./dashboard'));
  app.use('/issues', require('./issue'));
  app.use('/test', require('./test'));
}

module.exports = loadRoutes;
