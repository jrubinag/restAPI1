const Model = require('./model');

const addUser = async (user) => {
  const myMessage = new Model(user);
  return myMessage.save();
};

const getUsers = async () => {
  return Model.find();
};

module.exports = { add: addUser, get: getUsers };
