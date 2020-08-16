const store = require('./store');
const addUser = async (name) => {
  if (!name) {
    console.error('user o message vacios');
    throw new Error('Los datos son incompletos');
  }
  return store.add({ name });
};

const getUsers = async() => {
  return store.get()
};

module.exports = {
  addUser,
  getUsers,
};
