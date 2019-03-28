const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const widgetSchema = new Schema({
  widgetType: {type: String, enum: ['HEADER', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT', 'TEXT']},
  pageId: {type: mongoose.Schema.Types.ObjectId, ref: "Page"},
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  position: Number,
  dateCreated: {type: Date, default: Date.now()}
});

module.exports = widgetSchema;
