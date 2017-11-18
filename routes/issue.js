const express = require('express');
const { issueStore, severityStore } = require('../datastore');
const router = express.Router();

router.get('/', function(req, res) {
  let issues = issueStore.getAll();
  const openIssues = issues.filter(issue => issue.status === 'open');
  const closedIssues = issues.filter(issue => issue.status === 'closed');
  const status = req.query.is;

  if (status === 'open') {
    issues = openIssues;
  } else if (status === 'closed') {
    issues = closedIssues;
  }
  res.render('issues/index', { issues, status, openCount: openIssues.length, closedCount: closedIssues.length });
});

router.get('/new', function(req, res) {
  const issue = {};
  const errors = {};
  const severities = severityStore.getAll();

  res.render('issues/new', { issue, errors, severities });
});

router.post('/new', function(req, res) {
  const issue = req.body.issue;
  issue.status = 'open';
  var changeset = issueStore.add(issue);
  const severities = severityStore.getAll();

  if (changeset.isValid()) {
    res.redirect('/issues');
  } else {
    res.render('issues/new', { issue: changeset.entity, errors: changeset.errors, severities });
  }
});

router.get('/:id', function(req, res) {
  const issue = issueStore.get(req.params.id);
  res.render('issues/show', { issue });
});

module.exports = router;
