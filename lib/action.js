const fs = require('fs');

exports.fall = function(req, res) {
	var foodImg = new Array();
	fs.readFile('../data/foods.json', 'utf-8', (err, data) => {
		if (err) throw(err);
		const jsonData = JSON.parse(data);
		Object.keys(jsonData.maindishes).forEach(key => {
			foodImg.push(jsonData.maindishes[key].image);
		});
		
		


	});
}