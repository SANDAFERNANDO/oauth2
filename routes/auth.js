var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient

router.get('/auth', function (req, res, next) {
    res.render('auth', {});
});

router.get('/fashionworld', function (req, res, next) {
    res.render('fashionworld', {});
});


module.exports = router;