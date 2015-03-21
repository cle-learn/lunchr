var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
	name: String,
	address: String
});

mongoose.model('Place', PlaceSchema);