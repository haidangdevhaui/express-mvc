import controller from './controller'
export default new class extends controller {
	constructor() {
		super()
	}

    index(request, response) {
    	return response.send('home class style')
    }
}