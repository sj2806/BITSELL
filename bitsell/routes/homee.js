var express = require('express');
var mongoose = require('mongoose');
var User=require('./User');
var Sell=require('./Sell');
var router = express.Router();
var jsonUtils = require('./json_utils');
var result;
var i;
router.get('/homepage',function(req,res,next){
	var arr=[];
	var category = req.query.category;
	var subcategory = req.query.subcategory;
	console.log(category);
	Sell.find({subcat: subcategory,cat: category},function(err,items){
		result = items;
		console.log(result);
		for(i=0;i<result.length;i++)
		{
			arr.push(result[i]);
		}
		console.log(arr);
		if(req.session.user)
		{
			res.render('homepage',{data : arr,name: req.session.user["myname"]});	
		}
		else
		{
			res.render('Login');
		}
		
	});

});
module.exports = router;