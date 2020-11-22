const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 4001

// Middleware
app.use(bodyParser.json())
app.use(cors())


// Routes
const api = require('./server/routes/api.js')
app.use('/api', api)

// DB Connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to DB!')
})

// Listen to the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
