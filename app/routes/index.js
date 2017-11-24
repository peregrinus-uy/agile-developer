const issuesDB = require('../models/issue.store');

function loadRoutes(app) {
  app.get('/', function(req, res) {
    res.render('index', { layout: false });
  });

  app.get('/dashboard', function(req, res) {
    const issues = issuesDB.getAll();
    const criticalIssues = issues.filter(issue => issue.severity === 'Critical');
    const highIssues = issues.filter(issue => issue.severity === 'High');
    const mediumIssues = issues.filter(issue => issue.severity === 'Medium');
    const closed = issues.filter(issue => issue.status === 'closed');

    res.render('dashboard', {
      criticalPercent: criticalIssues.length / issues.length,
      highPercent: highIssues.length / issues.length,
      mediumPercent: mediumIssues.length / issues.length,
      closedPercent: closed.length / issues.length
    });
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
