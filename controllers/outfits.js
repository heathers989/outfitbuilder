const express = require('express');
const router = express.Router();
const Outfit = require('../models/outfits.js')
const User = require('../models/users.js')

//New
router.get('/new', (req, res) => {
    if (req.session.currentUser){
        let userCreating = {}
        userCreating.username = req.session.currentUser.username
        res.render('app/new.ejs', userCreating)
} else {
    res.redirect('/sessions/new')
}
})

//seed route
router.get('/seed', async (req, res) => {
    const newOutfits =
      [
        {
            hat: "https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dw68f02c89/images/10116847_be_a_star_headband_navy_MAIN.jpg?sw=913&sm=fit",
            top: "https://images.express.com/is/image/expressfashion/0097_08625436_0001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
            accs: "https://images.express.com/is/image/expressfashion/0008_00769235_0403?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
            bottom: "https://images.express.com/is/image/expressfashion/0091_07198909_0019?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
            shoes: "https://images.express.com/is/image/expressfashion/0095_09879567_0024?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
            tags: "casual",
            user: "marie"
        }, {
            hat: "https://images.express.com/is/image/expressfashion/0306_80000151_3001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
            top: "https://images.express.com/is/image/expressfashion/0094_07803086_2497?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
            accs: "https://images.express.com/is/image/expressfashion/0009_00951483_0355_f002?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
            bottom: "https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dw3d94a6ae/images/10123081_root_of_the_flatter_tights_taupe_MAIN.jpg?sw=913&sm=fit",
            shoes: "https://images.express.com/is/image/expressfashion/0095_00310134_0111_f002?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
            tags: "career",
            user: "heather"
        }
      ]
  
    try {
      const seedItems = await Outfit.create(newOutfits)
      res.send(seedItems)
    } catch (err) {
      res.send(err.message)
    }
  })

//Create
router.post('/', (req, res) =>{
    Outfit.create(req.body, (error, createdOutfit)=> {
        // let str = req.body.tags.split(',')
        // console.log(str)
        // createdOutfit.tags.push(str)
        // console.log(createdOutfit)
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
    Outfit.findById(req.params.id, (err, foundOutfit)=> {
       let user = req.session.currentUser.username
    //    console.log(user)
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