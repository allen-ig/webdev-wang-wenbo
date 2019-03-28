const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  name: String,
  websiteId: {type: mongoose.Schema.Types.ObjectId, ref: 'Website'},
  title: String,
  description: String,
  widgets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Widget'}],
  dateCreated: {type: Date, default: Date.now()}
});

module.exports = pageSchema;
