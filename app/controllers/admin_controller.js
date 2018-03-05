import Category from '../models/category'
export function index(request, response) {
	Category.find({}).sort({ _id: -1 }).select({
		name: 1,
		created_at: 1,
		status: 1,
		_id: 1
	}).exec((err, category) => {
		response.render('admin/index',{title: 'Admin', data: category});
	});	
	
}