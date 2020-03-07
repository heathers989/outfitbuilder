const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const methodOverride = require('method-override')
require('dotenv').config()

app.use(express.urlencoded({ extended: false}))

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  }))

  app.use(methodOverride("_method"))

  app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/outfitbuilderdb', { 
    useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


app.get('/', (req, res) => {
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    });
  })

  app.get('/app', (req, res)=>{
    if(req.session.currentUser){
        res.render('app/index.ejs')
    } else {
        res.redirect('/sessions/new');
    }
})

const userController = require('./controllers/users.js')
app.use('/users', userController)

const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController)


// Configuration
const PORT = process.env.PORT
const mongoURI = process.env.MONGO_URI


// Listen
app.listen(PORT, () => console.log('auth happening on port', PORT))