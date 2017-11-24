const express = require('express');
const router = express.Router();
const issuesDB = require('../models/issue.store');

// FIXME: Test to enable only on test.
router.post('/reset', function(req, res) {
  issuesDB.reset();
  res.send('OK');
});

router.post('/seed', function(req, res) {
  issuesDB.add(req.body);
  res.send('OK');
});

module.exports = router;
