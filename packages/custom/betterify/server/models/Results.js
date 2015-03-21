var mongoose = require('mongoose');

var ResultSchema = new mongoose.Schema({
	place: { type: mongoose.Schema.Types.ObjectId, ref: "Place" },
	votes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vote" }]
});

mongoose.model('Result', ResultSchema);