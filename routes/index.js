function loadRoutes(app) {
  const issuesDB = require('../datastore/issue.store');

  app.get('/', function(req, res) {
    res.render('index', { currentDate: new Date().toLocaleDateString() });
  });

  app.post('/session', function(req, res) {
    res.send('12345');
  });

  app.use('/issues', require('./issue'));

  // FIXME: Test to enable only on test.
  // if (process.env.NODE_ENV === 'test') {
  app.post('/test/reset', function(req, res) {
    issuesDB.reset();

    res.send('OK');
  });

  app.post('/test/seed', function(req, res) {
    issuesDB.add(req.body);

    res.send('OK');
  });
}

module.exports = loadRoutes;
