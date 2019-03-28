const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
  name: String,
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  description: String,
  pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'Page'}],
  dateCreated: {type: Date, default: Date.now()}
});

module.exports = websiteSchema;
