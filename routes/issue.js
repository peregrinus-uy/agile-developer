const express = require('express');
const { issueStore } = require('../datastore');
const router = express.Router();

router.get('/', function(req, res) {
  const issues = issueStore.getAll();
  res.render('issueList', { issues });
});

router.get('/:id', function(req, res) {
  const issue = issueStore.get(req.params.id);
  res.render('issue', { issue });
});

module.exports = router;
