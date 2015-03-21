var mongoose = require('mongoose');

var VoteSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	place: { type: mongoose.Schema.Types.ObjectId, ref: "Place" }
});

mongoose.model('Vote', VoteSchema);