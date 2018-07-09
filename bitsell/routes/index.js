var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User=require('./User');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/login', function(req, res, next) {
	if(req.session.user)
		{
			res.send("first logout bitch");
		}
    else
        {
        	res.render('Login');
    	}
});

router.post('/login', urlencodedParser, function(req, res) {
  var email = req.body.email;
  var password = req.body.passwrd;
  User.findOne({email: email, securepass: password},function(err, user){
  	if(err)
  	{   
  			res.render('Login',{value:1});
	}
	else
	{
		req.session.user=user;
		if(req.session.user)
		{
			res.render('home',{name: req.session.user["myname"]});
		}
		else
		{
			res.render('Login');
		}
	}
  });
});

module.exports = router;
