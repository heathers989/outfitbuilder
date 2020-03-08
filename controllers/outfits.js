const express = require('express');
const router = express.Router();
const Outfit = require('../models/outfits.js')
const User = require('../models/users.js')


router.get('/new', (req, res) => {
        let userCreating = {}
        userCreating.username = req.session.currentUser.username
        res.render('app/new.ejs', userCreating)
})

router.get('/', (req, res) => {
    res.render('app/index.ejs')
})

module.exports = router