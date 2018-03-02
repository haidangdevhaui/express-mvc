import model from './model'
import { Schema } from 'mongoose'
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
	categoryId: Schema.ObjectId,
	stt: {
		type: Number
	},
	status: {
        type:[{
            type:String,
            enum: ['available', 'unavailable']
        }],
        default: ['available']
    },
	created_at: {
		type: Date,
		default: Date.now
	},
	
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