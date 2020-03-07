const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

// Configuration
const PORT = process.env.PORT
const mongoURI = process.env.MONGO_URI

// Middleware
// allows us to use put and delete methods
app.use(methodOverride('_method'))
// parses info from our input fields into an object
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('index route')
  })


// Listen
app.listen(PORT, () => console.log('auth happening on port', PORT))