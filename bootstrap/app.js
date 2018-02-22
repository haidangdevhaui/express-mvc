// bootstraping app
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
// using .env file mapping to process.env
dotenv.config()

// init core helper functions
require('./core_helpers')

// connect database
mongoose.connect(config('database.mongo'));

let app = express()

// using body parser for form data
app.use(bodyParser.json())

// static files in public
app.use('/', express.static('public'))
// set view as ejs
app.set('view engine', 'ejs')

// booting routes
require('../routes/web')(app)

export default app