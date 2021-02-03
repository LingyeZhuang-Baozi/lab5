// Get all of our friend data
var data = require('../data.json');

exports.view = function(request, response){
	console.log(data);

	// 2b. Pass the friend JSON to the template
	response.render('index', data);

};