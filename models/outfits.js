const mongoose = require('mongoose')
const Schema = mongoose.Schema

const outfitSchema = Schema({
  hat: String,
  top: {type: String, required: true},
  accs: String,
  bottom: String,
  shoes: String,
  tags: [String],
  user: {type: String, required: true}
})

const Outfit = mongoose.model('Outfit', outfitSchema)

module.exports = Outfit