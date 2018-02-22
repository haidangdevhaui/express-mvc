import * as home_controller from '../app/controllers/home_controller'
import time_logging from '../app/middlewares/time_logging'

module.exports = (route) => {
	// defined routes
	route.get('/', time_logging, home_controller.index)
}