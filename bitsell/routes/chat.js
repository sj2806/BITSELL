var express=require('express');
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var User=require('./User');
var Sell=require('./Sell');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/',function(req,res,next){
	if(req.session.user)
		{
			res.render('chatapp',{name: req.session.user["myname"]});
		}
    else
        {
        	res.render('Login');
        }
	
});
module.exports=router;