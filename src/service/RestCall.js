import got from 'got'
import NodeCache from 'node-cache'

const myCache = new NodeCache()

let auth = async () => {
	try {
		const response = await got.post(`${process.env.SERVER}/auth`, {
			json: {
				email: 'user@gmail.com',
				password: 'lTgAYaLP9jRs'
			},
			responseType: 'json'
		})
		response.body.time = Date.now()
		return response.body
	} catch (error) {
		console.error('auth error')
		console.error(error)
	}
}

let checkSession = async () => {
	let bearerToken = myCache.get('token')
	if (bearerToken &&
		bearerToken.token != null &&
		bearerToken.time != null &&
		Math.round(Math.abs(Date.now() - bearerToken.time) / 1000) < 300) {
		return bearerToken
	} else {
		bearerToken = await auth()
		myCache.set('token', bearerToken)
		return bearerToken
	}
}

let results = async () => {
	try {
		let bearerToken = await checkSession()
		console.log('token -> ', JSON.stringify(bearerToken))
		const response = await got(`${process.env.SERVER}/results`, {
			headers: {
				'Authorization': `Bearer ${bearerToken.token}`
			},
			responseType: 'json',
			timeout: 15000
		})
		return response
	} catch (err) {
		if (err.HTTPError.includes(401)) {
			 myCache.set('token', await auth())
			 results()
		}
		console.error('results error')
		console.error(err)
	}
}

export {
	auth,
	results
}