var mongoose = require('mongoose');

var ResultSchema = new mongoose.Schema({
	place: { type: mongoose.Schema.Types.ObjectId, ref: "Place" }
});

mongoose.model('Result', ResultSchema);