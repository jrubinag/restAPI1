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

    console.log({ fullMessage });
    resolve(fullMessage);
  });
};

module.exports = {
  addMessage,
};
