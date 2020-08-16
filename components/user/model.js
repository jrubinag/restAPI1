const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const collectionName = 'users';

const mySchema = new Schema({
  name: String,
});

const model = mongoose.model(collectionName, mySchema);
module.exports = model;
