import Category from '../../models/category'
// var Category = require('../../models/category').default;
var mongoose = require('mongoose');
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
	Category.find({}).sort({ _id: -1 }).select({
		name: 1,
		created_at: 1,
		status: 1,
		_id: 1
	}).exec((err, category) => {
		response.render('admin/category/index',{
			title: 'List category',
			data: category
		});
	});	
}
export function create(request, response) {
    response.render('admin/category/create', {title: 'Create'});
}
export function postCreate(request, response) {
    const newCategory = new Category({
        name: request.body.name,
    });
    newCategory.save((err, result)=> {
    	// request.flash('info', 'Flash Message Added');
    	response.redirect('/admin/category');
    });   
   
    // Category.create(request.body.name);
}
export function edit(request, response) {
	var cateId = mongoose.Types.ObjectId(request.params.id);
	Category.findById(cateId, (err, result) => {
		response.render('admin/category/edit',{
			title: 'Update',
			data: result
		});
	});    
}
export function postEdit(request, response){
	// let conditions = {},
	
}
export function deleteCategory(request, response) {
	var id = mongoose.Types.ObjectId(request.params.id);	
	Category.findOneAndRemove({ _id: id }, (err) => {
		response.redirect('back');
	})
}