let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  name: { type: String, required: true },
  img: { type: String },
  url: { type: String }
})

module.exports = mongoose.model('Gift', schema)