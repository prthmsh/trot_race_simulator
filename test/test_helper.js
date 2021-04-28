const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.MONGO_HOST}/trot_race`)

mongoose.connection
	.once('open', () => console.log('Connected!'))
	.on('error', (error) => {
		console.warn('Error : ', error);
	});

beforeEach((done) => {
	mongoose.connection.collections.tests.drop(() => {
		done();
	});
});