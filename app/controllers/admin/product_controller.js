export function index(request, response){
	response.render('admin/product/index');
}
export function create(request, response){
	response.render('admin/product/create');
}
export function postCreate(request, response){
	response.send('method post create product');
}
export function edit(request, response){
	response.render('admin/product/edit');
}
// export function postEdit(request, response){
// 	response.send('method post edit product');
// }
// export function delete(request, response){
// 	response.send('method delete');
// }