// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data["friends"]);
	res.render('index', 
		{
			"friends": data["friends"]
		});
};