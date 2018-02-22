import model from './model'

/**
 * defined schema
 * @type {Object}
 */
let schema = {
	name: String
}

/**
 * defined static methods
 */
let statics = {
	getAll: function() {
		return this.find()
	}
}

/**
 * defined methods
 */
let methods = {

}

export default model('posts', schema, methods, statics)