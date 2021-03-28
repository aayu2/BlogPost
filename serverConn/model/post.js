const mongoose = require('mongoose');
const Schema = mongoose.Schema

var postSchema = new Schema({
  heading: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  createdBy: {
    type: String,
    default: ""
  },
  createdOn: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('post', postSchema);;