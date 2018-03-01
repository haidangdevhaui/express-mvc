
var Category = require('../../models/category').default;

export function index(request, response){
	var data = Category.find();
	
	response.render('admin/category/index',{title: 'List category', data:data});
}
export function create(request, response){
	response.render('admin/category/create');
}
export function postCreate(request, response){
	
	const newCategory = new Category({
		name: request.body.name
	});
	newCategory.save();
	// request.flash('info', 'Flash Message Added')
	response.redirect('/admin/category');
	// Category.create(request.body.name);
	// response.send('method post category');
}
export function edit(request, response){
	response.render('admin/category/edit');
}
// export function postEdit(request, response){
// 	response.send('method post edit product');
// }
// export function delete(request, response){
// 	response.send('method delete');
// }