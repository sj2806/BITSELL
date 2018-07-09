var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mongoose = require('mongoose');
var User=require('./User');
/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', urlencodedParser, function(req, res) {
  var newuser = new User();
  newuser.myname = req.body.myname;
  newuser.idno = req.body.idno;
  newuser.email = req.body.email;
  newuser.securepass = req.body.securepass;
  newuser.hostel = req.body.hostel;
  newuser.roomno = req.body.roomno;
  newuser.contact = req.body.contact;
  newuser.save(function(err, savedObject){
  		if(err)
		  {
        if (newuser.myname&&newuser.idno&&newuser.email&&newuser.securepass&&newuser.hostel&&newuser.roomno&&newuser.contact)
        {
          res.render('signup',{val:1});
        }
        else 
        {
          res.render('signup',{val:2});
        }
      }
  		else
  		{
  			res.render('Login');
  		}

  });
});

module.exports = router;