const express = require('express');
const router = express.Router();
const issuesDB = require('../models/issue.store');

var counter = 0;

function dummyIssue(attrs) {
  counter++;

  const dummyIssue = {
    title: `dummy issue ${counter}`,
    description: `dummy description ${counter}`,
    authorId: 1,
    severity: "High",
    status: "open",
    estimation: 1
  };

  return Object.assign(dummyIssue, attrs);  
}

// FIXME: Test to enable only on test.
router.post('/reset', function(req, res) {
  issuesDB.reset();
  res.send('OK');
});

router.post('/seed', function(req, res) {
  issuesDB.add(dummyIssue(req.body));
  res.send('OK');
});

module.exports = router;