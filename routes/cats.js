var Cats = require('../models/cats')

// list all of the cats
exports.list = function(req, res) {
	// don't forget to sort the cats by age
	//var catsList = Cats.find().exec(function (err, docs) {
	var catsList = Cats.find().sort({age:-1}).exec(function (err, response) {
		if (err) {
			return console.log("error", cats);
		}
		else {
			res.render('cats', {cats: response, title: 'Flappy Bird: A Fappy, Happy Man'});
		}
	});
};

exports.newCat = function(req, res) {
	
	var ageArray = [23,5,3,6,11,14,15,18,9,8];
	var colorArray = ["blue","black","brown","purple","white","grey","gray","orange","red","magenta"];
	var nameArray = ["peyton","tom","bill","russell","troy","pete","jim","john","lovie","colin"];
	
	var ageArrayRandom = ageArray[Math.floor(Math.random() * ageArray.length)];
	var colorArrayRandom = colorArray[Math.floor(Math.random() * colorArray.length)];
	var nameArrayRandom = nameArray[Math.floor(Math.random() * nameArray.length)];
	
	var kitty = new Cats({ age: ageArrayRandom, color: colorArrayRandom, name: nameArrayRandom});
	kitty.save(function (err) {
		if (err)
			return console.log("error we couldn't save kitty");
		res.render('new', {title: 'Cat added', cats: kitty });
		//res.redirect('/cats');
	});
};

exports.sortCatsByColor = function(req, res) {
	var catsSort = Cats.find({ color : req.params.color}).sort({age:-1}).exec(function (err, response) {
		if (err) {
			return console.log(err);
		}
		else {
			res.render('cats', {cats: response, title: "List of all " + req.params.color + " cats"});
		}
	});
};

exports.deleteOldestCat = function(req, res){
	//Deletes the oldest cat
	Cats.find().sort({age: -1}).exec(function(err, response) {
	response[0].remove();
	res.redirect('/cats');
	});
};
















