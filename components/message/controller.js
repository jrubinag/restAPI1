const store = require('./store');
const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('user o message vacios');
      reject('Los datos son incompletos');
      return false;
    }

    const fullMessage = {
      user,
      message,
      date: new Date(),
    };

    store.add(fullMessage);
    resolve(fullMessage);
  });
};

const getMessages = (filterUser) =>
  new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });

const updateMessage = async (id, message) => {
    if (!id || !message) {
      throw new Error('Invalid data');
    }
    const result = await store.updateText(id, message);
    return result
};

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
};
