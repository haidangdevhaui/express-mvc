import Category from '../../models/category'
import Product from '../../models/product'
export function index(request, response){
	Product.find().sort({ _id: -1 }).exec((err, products) => {
		
		response.render('admin/product/index', {
			title: 'Product',
			products: products,
		});
	});	
}
export function create(request, response){
	Category.find({}, (err, category) => {
		response.render('admin/product/create', {
			title: 'Create',
			categories: category,
		});
	});
	
}
export function postCreate(request, response){
	const newProduct = new Product({
		name: request.body.name,
		category_id: request.body.category,
		image: request.body.imageUrl,
		alias: request.body.alias,
		numb_sort: request.body.numb_sort,		
	});
	newProduct.save((err, result) => {
		response.redirect('/admin/product');
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
	let productId = request.params.id;

	let product = await Product
		.findById(productId)
		.populate({ path: 'category_id', select: 'name' });

	let categories = await Category.find();

	return response.render('admin/product/edit', {
		title: 'Update',
		product,
		categories

	});
}
