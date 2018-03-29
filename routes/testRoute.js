var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/download/download.txt');
    //res.render('index', { title: 'testRoute' });
});
module.exports = router;
