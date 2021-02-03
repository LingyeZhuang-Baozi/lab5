var data = require("../data.json");

exports.addFriend = function(request, response) { 
	// Your code goes here

	/* 5c. Create the controller */
	console.log("New friend added");  // debug message

	/* 5d. Construct the friend's JSON object */
	var nameInput = request.query.name;
	var descriptionInput = request.query.description;
	var newFriend = {
			"name": nameInput,
			"description": descriptionInput,
			"imageURL": "http://lorempixel.com/400/400/people/"  // fake property
	};

	console.log(newFriend);  // debug message, see newFriend object

	/* 5e. Add friend to database */
	data.friends.push(newFriend);
	response.render('index', data);  // update data

 }