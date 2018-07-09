var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/test');

var mySchema = mongoose.Schema({
  myname: String,
  idno: String,
  email: {type: String,unique: true},
  securepass: String,
  hostel: String,
  roomno: String,
  contact: String
});

var choicemodel = mongoose.model('users',mySchema);
module.exports = choicemodel;
