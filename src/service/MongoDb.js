import mongoose from 'mongoose'
var Event = require('../model/event_model');

class MongoDb {
	constructor(mongohost = process.env.MONGO_HOST) {
		mongoose.Promise = global.Promise
		mongoose.connect(`mongodb://${mongohost}/trot_race`, {
			useNewUrlParser: true
		})
		mongoose.connection
			.once('open', () => console.log('Mongo connected'))
			.on('error', (error) => {
				console.error('Mongo connection error : ', error)
			})

		this.save = (data) => {
			let eventData = new Event(data)
			eventData.save()
				.then(response => {
					return 'item saved to mongo'
				})
				.catch(err => {
					console.error('mongoose catch')
					console.error(err)
					return 'unable to save in mongo'
				})
		}
	}
}

module.exports = MongoDb