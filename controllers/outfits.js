const express = require('express');
const router = express.Router();
const Outfit = require('../models/outfits.js')
const User = require('../models/users.js')

//New
router.get('/new', (req, res) => {
        let userCreating = {}
        userCreating.username = req.session.currentUser.username
        res.render('app/new.ejs', userCreating)
})

//Create
router.post('/', (req, res) =>{
    Outfit.create(req.body, (error, createdOutfit)=> {
        console.log(createdOutfit)
        res.redirect(`/app/${createdOutfit.id}`)
    })
})

// //index
router.get('/', (req, res)=>{
    if(req.session.currentUser){
        Outfit.find({}, (error, allOutfits)=> {
            res.render('app/index.ejs', { outfits: allOutfits
            })
        }) 
    } else {
        res.redirect('/sessions/new');
    }
})

//show
router.get('/:id', (req, res) => {
    Outfit.findById(req.params.id, (err, foundOutfit)=> {
        res.render('app/show.ejs', { outfit: foundOutfit
        })
    })
})

module.exports = router