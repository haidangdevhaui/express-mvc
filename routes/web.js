import { Router } from 'express'
import * as home_controller from '../app/controllers/home_controller'
import * as admin_controller from '../app/controllers/admin_controller'
import * as category_controller from '../app/controllers/admin/category_controller'
import * as product_controller from '../app/controllers/admin/product_controller'
import time_logging from '../app/middlewares/time_logging'
import admin_authentication from '../app/middlewares/admin_authentication'

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

var upload = multer({
    storage: storage
});

export default function(route, passport) {
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
	// route register
	route.get('/register', admin_controller.register);
	route.post('/register', admin_controller.postRegister);

	//route login
	route.get('/login', admin_controller.login);
	route.post('/login', passport.authenticate('login',{
		successRedirect : '/admin',
        failureRedirect : '/login',
		failureFlash : true,		
	}));
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
	route.get('/admin/product/create/:cateid', product_controller.create);
	route.post('/admin/product/create',upload.single('imageUrl'), product_controller.postCreate);
	route.get('/admin/product/edit/:id', product_controller.edit);
	route.post('/admin/product/edit', upload.single('imageUrl'), product_controller.postEdit);
	route.get('/admin/product/delete/:id', product_controller.deleteProduct)

	// router frontend
	route.get('/project/:id', home_controller.index);
	route.get('/detail/:id', home_controller.detail);
}

function isLoggedIn(req, res, next){
    if(req.isAuthenticated())
    return next();
    res.redirect('/login');
};