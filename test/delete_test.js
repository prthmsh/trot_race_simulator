// delete_test.js
const assert = require('assert')
const Test = require('../src/model/test_model')

describe('Deleting a test', () => {

	beforeEach(function(done) {
		const test = new Test({
			name: 'test'
		})

		test.save()
			.then(() => done())
	})

	it('removes a test', (done) => {
		Test.remove()
			.then(() => Test.findOne({
				name: 'test'
			}))
			.then((data) => {
				assert(data === null)
				done()
			})
	})

	it('removes multiple tests', (done) => {
		Test.remove({
				name: 'test'
			})
			.then(() => Test.findOne({
				name: 'test'
			}))
			.then((data) => {
				assert(data === null)
				done()
			})
	})

	afterEach(function(done){
    Test.collection.drop()
    done()
	})
	
})