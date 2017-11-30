const express = require('express');
const router = express.Router();
const{ issueStore } = require ('../models');


router.get('/', function(req, res) {

    const openIssuesCount = issueStore.getAllOpen().length;
    res.render('dashboard', {
        openIssuesCount: openIssuesCount
    });
});

module.exports = router;
