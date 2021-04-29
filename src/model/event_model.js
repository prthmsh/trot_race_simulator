const mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
	event: String,
	horse: {
		id: Number,
		name: String
	},
	time: Number
}, {
	collection: 'events'
})

module.exports = mongoose.model('event', userSchema)