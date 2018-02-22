import Post from '../models/post'
/**
 * index action
 * @param  {object} request
 * @param  {object} response
 * @return {string}
 */
export async function index(request, response) {
	let posts = await Post.getAll();
	return response.render('index', { posts })
}