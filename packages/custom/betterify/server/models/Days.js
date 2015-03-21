var mongoose = require('mongoose');

var DaySchema = new mongoose.Schema({
	result: { type: mongoose.Schema.Types.ObjectId, ref: "Result" },
	users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	places: [{ type: mongoose.Schema.Types.ObjectId, ref: "Place" }],
});

mongoose.model('Day', DaySchema);