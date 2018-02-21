// bootstraping app
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
// using .env file mapping to process.env
dotenv.config()

let app = express()

// using body parser
app.use(bodyParser.json())

// static files in public
app.use('/', express.static('public'))
// set view ejs
app.set('view engine', 'ejs')

require('../routes/web')(app)

export default app