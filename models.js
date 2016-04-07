var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  email:  String,
  content: String,
  created: {type:Date, default:Date.now}
});

exports.Message = mongoose.model('Message', MessageSchema);