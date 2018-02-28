

export function index(request, response){
	response.render('admin/category/index');
}
export function create(request, response){
	response.render('admin/category/create');
}
export function postCreate(request, response){
	const newCategory = new Category({

	});
	response.send('method post category');
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