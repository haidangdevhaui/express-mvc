import Category from '../../models/category'
import Product from '../../models/product'
var mongoose = require('mongoose');
var multer  = require('multer')
// export function index(request, response){
// 	Product.find().sort({ _id: -1 }).exec((err, products) => {
		
// 		response.render('admin/product/index', {
// 			title: 'Product',
// 			products: products,
// 		});
// 	});	
// }
/**
 * get list product action
 * @param  {object} request
 * @param  {object} response
 */
export async function index(request, response){
	let products = await Product.find().sort({_id: -1});
	for(var i= 0; i < products.length; i++){
		console.log(products[i].category_id);
	}
	let categories = await Category.find();
	response.render('admin/product/index', {
		title: 'List product',
		products: products,
		categories: categories
	})
}
export async function create(request, response){
	var cate_id = mongoose.Types.ObjectId(request.params.cateid);
	var category = await Category.findById({_id: cate_id});
	return response.render('admin/product/create', {
		category: category,
		title: 'Insert giao diện',
	});	
}
export function postCreate(request, response){
	// console.log(request.params.cateid);
	var cate_id = request.body.cate_id;
	const newProduct = new Product({
		name: request.body.name,
		category_id: request.body.cate_id,
		image: request.body.imageUrl,
		alias: request.body.alias,
		numb_sort: request.body.numb_sort,		
	});
	newProduct.save((err, result) => {
		response.redirect('/admin/category/edit/' + cate_id);
	});
}
// export function edit(request, response){
// 	var product_id = request.params.id;
// 	Product.findOne({_id: product_id}).populate('categoryId').exec((err, result) => {
// 		if(err) console.log(err + '');		
// 		response.render('admin/product/edit', {
// 			data: result,
// 			title: "Update"
// 		});
// 		// console.log(result.categoryId.name);
// 	}
// }
/**
 * edit product action
 * @param  {object} request
 * @param  {object} response
 */
export async function edit(request, response){
	try {
		let productId = request.params.id;
		let product = await Product
			.findById(productId)
			.populate({ path: 'category_id' });
		var category = await Category.findById({_id: product.category_id._id});
		return response.render('admin/product/edit', {
			title: 'Edit',
			category: category,
			product: product
		});
	} catch (error) {
		console.log(error);
	}	
}
export function postEdit(request, response){
	let conditions = {};
	if(mongoose.Types.ObjectId.isValid(request.body.product_id) == true){
		conditions._id = mongoose.Types.ObjectId(request.body.product_id);
	}else{
        response.json({
            result: "faild",
            data: {},
            message: "you must enter your cate_id to update"
        });
	}
	let newValues = {};
	if(request.body.name && request.body.name.length > 1){
        newValues.name = request.body.name;
	}
	newValues.image = request.body.image;
	newValues.numb_sort = request.body.numb_sort;
	newValues.alias = request.body.alias;
	const options = {
        new: true,
        multi: true
	}
	Product.findOneAndUpdate(conditions, {$set: newValues}, options, (err, product) => {
		response.redirect('back');
	} );
}
export function deleteProduct(request, response){
	var product_id = mongoose.Types.ObjectId(request.params.id);
	Product.findOneAndRemove({_id: product_id}, (err) => {
		response.redirect('back');
	})
}
