import Category from '../../models/category'
import Product from '../../models/product'
export function index(request, response){
	response.render('admin/product/index',{title: 'Product'});
}
export function create(request, response){
	Category.find({}, (err, category) => {
		response.render('admin/product/create', {
			title: 'Create',
			categories: category
		});
	});
	
}
export function postCreate(request, response){
	
	response.send('method post create product');
}
export function edit(request, response){
	response.render('admin/product/edit', {title: 'Edit product'});
}
// export function postEdit(request, response){
// 	response.send('method post edit product');
// }
// export function delete(request, response){
// 	response.send('method delete');
// }