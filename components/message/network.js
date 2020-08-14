const express = require('express');
const response = require('../../network/response');

const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  controller
    .getMessages()
    .then((list) => response.success(req, res, list, 200)).catch(e => {
      response.error(req,res,'unexpected error', 500, 'log interno del error')
    })
});

router.post('/', (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(req, res, 'Informacion vacia invalida', 400);
    });
});

module.exports = router;
