var models = require('../models');
var mongoose = require('mongoose');


exports.send = function(req, res) {
    //console.log(req.body); // help you see what is inside of req.body
    var message =  mongoose.model('Message'); //mongoose.model('Message', Message);
    var new_message = new message();
    new_message.email = req.body.email;
    new_message.content = req.body.content;
    new_message.save(function(err, saved){
    	if(err){
        throw err;
	        console.log(err);
	    }else{
	        res.redirect("/");
	    }
    });
};