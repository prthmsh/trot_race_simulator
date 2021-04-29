const mongoose = require('mongoose')
let Schema = mongoose.Schema

let testSchema = new Schema({
	name: String
})

const test = mongoose.model('tests', testSchema)
module.exports = test;