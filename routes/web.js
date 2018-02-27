import { Router } from 'express'
import * as home_controller from '../app/controllers/home_controller'
import * as admin_controller from '../app/controllers/admin_controller'
import * as category_controller from '../app/controllers/admin/category_controller'
import time_logging from '../app/middlewares/time_logging'
import admin_authentication from '../app/middlewares/admin_authentication'

export default function(route) {
	// defined routes
	route.get('/', time_logging, home_controller.index)

	// for using prefix and middleware router
	// const adminRoutes = Router();
	// route.use('/admin', admin_authentication, adminRoutes)
	// adminRoutes.get('/', admin_controller.index)

	// for not prefix
	route.use('/admin*', admin_authentication);
	route.get('/admin', admin_controller.index);
	route.get('/admin/category', category_controller.index)
}