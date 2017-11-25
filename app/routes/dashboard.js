const express = require('express');
const issuesDB = require('../models/issue.store');
const router = express.Router();

router.get('/', function(req, res) {
  const issues = issuesDB.getAllOpen();

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

module.exports = router;
