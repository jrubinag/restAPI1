const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const collectionName = 'messages';

const mySchema = new Schema({
  user: String,
  message: { type: String, required: true },
  date: Date,
});

const model = mongoose.model(collectionName, mySchema);
module.exports = model;
