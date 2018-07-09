var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mongoose = require('mongoose');
var User=require('./User');
/* GET home page. */
router.get('/', function(req, res, next) {
	req.session.user=0;
    res.render('Login');
});
module.exports=router;