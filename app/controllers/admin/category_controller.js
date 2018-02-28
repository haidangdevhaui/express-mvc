
var Category = require('../../models/category').default;

export function index(request, response){
	response.render('admin/category/index');
}
export function create(request, response){
	response.render('admin/category/create');
}
export function postCreate(request, response){
	const criteria = {
        name: new RegExp('^' + request.body.name.trim() + '$', 'i')
    };
    Category.find(criteria).limit(1).exec((err, categories) => {
        if(err){
            res.json({
                    result: "faild",
                    data: {},
                    message: "Error is {$error}"
                });
        }else{
            // if it exist, don't allow to insert
            if(categories.length > 0){
                res.json({
                    result: "faild",
                    data: {},
                    message: "Can not insert because the name exits"
                });
            }else{
                // can insert
                const newCategory = new Category({
                    name: request.body.name,
                    
                });
                newCategory.save((err, addedCategory) => {
                    if(err){
                        res.json({
                            result: "failed",
                            data: {},
                            message: 'Error is : {$err}'
                        });
                    }else{
                        res.json({
                            result: "ok",
                            data: addedCategory,
                            message: "Insert new category successfully"
                        });
                    }
                });
            }
        }
    });
	// const newCategory = new Category({
	// 	name: request.body.name
	// });
	// newCategory.save((err, result) => {
	// 	if(err){
	// 		response.json({
	// 			a: 'failed',
	// 			data: {},
	// 			message: 'falild ${err}'
	// 		});
	// 	}else{
	// 		response.json({
	// 			a: 'ok',
	// 			data: result,
	// 			message: 'successful'
	// 		})
	// 	}
	});
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