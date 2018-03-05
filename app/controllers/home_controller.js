import Post from '../models/post'
/**
 * index action
 * @param  {object} request
 * @param  {object} response
 * @return {string}
 */
// export async function index(request, response) {
// 	let posts = await Post.getAll();
// 	return response.render('front/index', { posts })
// }
export async function index(request, response) {
	var a = 'sdfsdf';
	return response.render('front/index', {
		a: a,
		title: 'Home'
	});
}
export async function detail(request, response) {
	return response.render('front/detail', {
		title: 'chi tiet',
		
	});
}