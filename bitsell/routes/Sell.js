var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


var db = mongoose.createConnection('mongodb://localhost:27017/test');

var mySchema = mongoose.Schema({
  titlea: String,
  price: String,
  years: String,
  cat: String,
  subcat: String,
  desc: String,
  user: String
});

var choicemodel = db.model('sells',mySchema);
module.exports = choicemodel;
