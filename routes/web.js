import { Router } from 'express'
import * as home_controller from '../app/controllers/home_controller'
import * as admin_controller from '../app/controllers/admin_controller'
import * as category_controller from '../app/controllers/admin/category_controller'
import * as product_controller from '../app/controllers/admin/product_controller'
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

	// route admin
	route.use('/admin*', admin_authentication);

	route.use('/admin*', admin_authentication, function(request, response, next) {
		route.set('layout', 'admin/layout');
		return next();
	});
	// route category
	route.get('/admin', admin_controller.index);
	route.get('/admin/category', category_controller.index);
	route.get('/admin/category/create', category_controller.create);
	route.post('/admin/category/create', category_controller.postCreate);
	route.get('/admin/category/edit/:id', category_controller.edit);
	route.post('/admin/category/edit', category_controller.postEdit);
	route.get('/admin/category/delete/:id', category_controller.deleteCategory);
	// route product
	route.get('/admin/product', product_controller.index);
	route.get('/admin/product/create', product_controller.create);
	route.post('/admin/product/create', product_controller.postCreate);
	route.get('/admin/product/edit/:id', product_controller.edit);
	// route.post('/admin/product/edit', product_controller.postEdit);
	// route.get('/admin/product/delete/:id', product_controller.deleteProduct)

}