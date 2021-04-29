import MongoDb from './service/MongoDb'

import dotenv from 'dotenv'
dotenv.config()

const restCall = require('./service/RestCall')

let race = () => {
	restCall.results()
		.then((result) => {
			console.log(result.statusCode, JSON.stringify(result.body))
			if (result.statusCode === 200) {
				let db = new MongoDb()
				return db.save(result.body)
			} else if (result.statusCode === 204) {
				console.log('204, recall race')
				return race()
			} else if (result.statusCode === 401) {
				console.log('401, invalid token')
				return
			}
		})
		.catch((err) => {
			console.error('app err')
			console.error(err)
		})
}
setInterval(race, 60000)

console.info('\nWorker started')