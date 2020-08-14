const express = require('express');
const message = require('../components/message/network');
const userRouter = require('../components/user/network');

const routes = (server) => {
  server.use('/message', message);
  server.use('/user', userRouter);
};

module.exports = routes;
