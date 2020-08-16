const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const collectionName = 'messages';
/**
 * type: ObjectId
 *  ref: exact name of the collection that references to
 */
const mySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  message: { type: String, required: true },
  date: Date,
});

const model = mongoose.model(collectionName, mySchema);
module.exports = model;
