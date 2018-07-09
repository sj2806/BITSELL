var express=require('express');
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var User=require('./User');
var Sell=require('./Sell');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/', function(req, res, next) {
	if(req.session.user)
		{
			res.render('sell');
		}
    else
        {
        	res.render('Login');
        }
});
router.post('/', urlencodedParser, function(req, res){
    var sell = new Sell();
    sell.titlea = req.body.myname;
    sell.price = req.body.idno;
    sell.years = req.body.hostel;
    sell.cat = req.body.catag;
    sell.subcat = req.body.subcatag;
    sell.desc = req.body.description;
    sell.user = req.session.user["email"];
    console.log(sell.user);
    sell.save(function(err, savedObject){
  		if(err)
		{
       
          res.render('sell',{val:2});
      	}
  		else
  		{
  			if(!(sell.titlea&&sell.price&&sell.years&&sell.cat&&sell.subcat&&sell.desc))
        	{
          		res.render('sell',{val:1});
        	}
        	else
        	{
            console.log(savedObject);
        		res.render('home');
        	}
  			
  		}

  });
});
module.exports = router;