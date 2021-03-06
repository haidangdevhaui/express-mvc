// bootstraping app
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import expressLayouts from 'express-ejs-layouts'
import routes from '../routes/web'
import core_helpers from './core_helpers'

// using .env file mapping to process.env
dotenv.config()

// init core helper functions
core_helpers()

// connect database
mongoose.connect(config('database.mongo'));

let app = express()

// using body parser for form data
app.use(bodyParser.json())

// static files in public
app.use('/', express.static('public'))
// set view as ejs
app.set('view engine', 'ejs')

// use layout
app.use(expressLayouts);

// booting routes
routes(app)

export default app