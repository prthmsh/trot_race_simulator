//inside read_test.js
const assert = require('assert')
const Test = require('../src/model/test_model')

describe('Reading test', () => {

	beforeEach(function (done) {
		const test = new Test({
			name: 'test'
		})

		test.save()
			.then(() => done())
	})

	it('finds test with the name of test', (done) => {
		Test.findOne({
				name: 'test'
			})
			.then((data) => {
				assert(data.name === 'test')
				done()
			})
	})

	afterEach(function (done) {
		Test.collection.drop()
		done()
	})

})