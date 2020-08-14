/**
 * MONGO atlas user: db_user_test
MongoAtlas pass: QwHa49XONqb0bwlI
 */

const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect(
  'mongodb+srv://db_user_test:QwHa49XONqb0bwlI@cluster0.22i3w.mongodb.net/telegram?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

console.log('[db] Conectada con exito');

const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async (filterUser) => {
  let filter = {};
  if (filterUser != null) {
    filter = { user: filterUser };
  }
  return Model.find(filter);
};

const updateText = async (id, message) => {
  const foundMessage = await Model.findById({ _id: id });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
};

const remove = async (id) => {
  return Model.deleteOne({ _id: id });
};

module.exports = { add: addMessage, list: getMessages, updateText, remove };
