import home_class from '../app/controllers/home_class'
import * as home_function from '../app/controllers/home_function'

module.exports = (route) => {
	// class style
	route.get('/', home_class.index)
	// functional style
	route.get('/', home_function.index)
}