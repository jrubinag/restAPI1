/**
 * MONGO atlas user: db_user_test
MongoAtlas pass: QwHa49XONqb0bwlI
 */

const Model = require('./model');
const { populate } = require('./model');

const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async (filterUser) => {
  try {
    let filter = {};
    if (filterUser != null) {
      filter = { user: filterUser };
    }
    //This references the field that is going to be used to link to other collection
    const result = await Model.find(filter)
      .populate('user')
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });

    console.log('retrieved results', { result });
    return result;
  } catch (e) {
    console.log('There was an unexpected error', { e });
    throw e;
  }
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
