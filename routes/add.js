var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add',
		{});

	var newguy = {
					'name': req.query.name,
					'description': req.query.description,
					'imageURL' : "http://lorempixel.com/400/400/people"
				};

	if ( typeof newguy["name"] != 'undefined' && typeof newguy["description"] != 'undefined')
	{
		console.log(" name is undefined");
		data["friends"].push(newguy);
	}

//	data["friends"].push(newguy);


}

