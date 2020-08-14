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

const getMessages = () =>
  new Promise((resolve, reject) => {
    resolve(store.list());
  });

module.exports = {
  addMessage,
  getMessages,
};
