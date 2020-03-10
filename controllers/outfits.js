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

//index
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


// show
router.get('/:id', (req, res) => {
    if(req.session.currentUser){
    Outfit.findById(req.params.id, (err, foundOutfit, user)=> {
       user = req.session.currentUser.username
        res.render('app/show.ejs', { outfit: foundOutfit, userCreated: user})    
    })
        } else {
            res.redirect('/sessions/new')
        }
})

//delete
router.delete('/:id', (req, res)=>{
    Outfit.findByIdAndRemove(req.params.id, (err, data) =>{
        res.redirect('/app')
    })
  })

  //edit
  router.get('/:id/edit', (req, res)=> {
    Outfit.findById(req.params.id, (err, foundOutfit) => {
        res.render('app/edit.ejs', {outfit: foundOutfit})
    })  
})

//PUT/update
router.put('/:id', (req, res)=>{
    Outfit.findByIdAndUpdate(req.params.id, req.body, 
        {new: true}, (err, updatedModel) => {
            res.redirect(`/app/${req.params.id}`)
    })
  })

module.exports = router