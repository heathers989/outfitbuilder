const mongoose = require('mongoose')
const Schema = mongoose.Schema

const outfitSchema = Schema({
  hat: String,
  top: {type: String, required: true},
  accs: String,
  bottom: String,
  shoes: String,
  tags: String
})

const Outfit = mongoose.model('Outfit', outfitSchema)

module.exports = Outfit