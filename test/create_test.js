const assert = require('assert')
const Test = require('../src/model/test_model')

describe('Creating documents', () => {

	it('creating test', (done) => {
		const test = new Test({
			name: 'test'
		})
		test.save()
			.then(() => {
				assert(!test.isNew)
				done()
			})
	})

	afterEach(function(done){
    Test.collection.drop()
    done()
	})
	
})