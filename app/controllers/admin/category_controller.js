import Category from '../../models/category'
// var Category = require('../../models/category').default;

// export function index(request, response){
// 	var data = Category.find();
	
// 	response.render('admin/category/index',{title: 'List category', data:data});

/**
 * category index action - async/await style
 * @param  {object} request
 * @param  {object} response
 */
// export async function index(request, response) {
//     var data = await Category.find();
//     response.render('admin/category/index', {
//         title: 'List category',
//         data: data
//     });

// }

/**
 * category index action - promise/callback style
 * @param  {object} request
 * @param  {object} response
 */
export function index(request, response) {
	Category.find({}, function(err, categories) {
		response.render('admin/category/index', {
	        title: 'List category',
	        data: categories
	    });
	})
}


export function create(request, response) {
    response.render('admin/category/create', {title: 'Create'});
}
export function postCreate(request, response) {
    const newCategory = new Category({
        name: request.body.name
    });
    newCategory.save((err, result)=> {
    	request.flash('info', 'Flash Message Added');
    	response.redirect('/admin/category');
    });
    
   
    // Category.create(request.body.name);
    // response.send('method post category');
}
export function edit(request, response) {
    response.render('admin/category/edit');
}
// export function postEdit(request, response){
// 	response.send('method post edit product');
// }
// export function delete(request, response){
// 	response.send('method delete');
// }