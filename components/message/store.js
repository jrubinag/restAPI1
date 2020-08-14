/**
 * MONGO atlas user: db_user_test
MongoAtlas pass: QwHa49XONqb0bwlI
 */

const Model = require('./model');

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
