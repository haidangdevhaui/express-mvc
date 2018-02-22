import * as home_controller from '../app/controllers/home_controller'

module.exports = (route) => {
	// defined routes
	route.get('/', home_controller.index)
}