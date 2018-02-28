import model from './model'

/**
 * defined schema
 * @type {Object}
 */
let schema = {
	name: {
		type: String,
		require: true
	},
	alias: {
		type: String,
	},
	image: {
		type: String
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	categoryId: Schema.ObjectId,
}

/**
 * defined static methods
 */
let statics = {
	
}

/**
 * defined methods
 */
let methods = {

}

export default model('category', schema, methods, statics)