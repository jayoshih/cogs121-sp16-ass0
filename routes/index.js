var models = require('../models');
var mongoose = require('mongoose');

exports.view = function(req, res) {
	models.Message.find().exec(renderData);
    
	function renderData(err, messages){
		if(err){
			console.log(err)
		}else{
			console.log(messages);
			res.render('index', {data: messages});
		}
	}

}
