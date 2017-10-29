const express = require('express');
const { issueStore } = require('../datastore');
const router = express.Router();

router.get('/', function(req, res) {
  const issues = issueStore.getAll();
  res.render('issues/index', { issues });
});

router.get('/new', function(req, res) {
  const issue = {};
  const errors = {};

  res.render('issues/new', { issue, errors });
});

router.post('/new', function(req, res) {
  var changeset = issueStore.add(req.body.issue);

  if (changeset.isValid()) {
    res.redirect('/issues');
  } else {
    res.render('issues/new', { issue: changeset.entity, errors: changeset.errors });
  }
});

router.get('/:id', function(req, res) {
  const issue = issueStore.get(req.params.id);
  res.render('issues/show', { issue });
});

module.exports = router;
