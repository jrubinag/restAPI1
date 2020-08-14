const express = require('express');
const response = require('../../network/response');

const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  response.success(req, res, 'Tod bien', 205);
});

router.post('/', (req, res) => {
  controller.addMessage(req.body.user, req.body.message).then((fullMessage) => {
      response.success(req,res, fullMessage, 201)
  }).catch(e => {
    response.error(req, res, 'Informacion vacia invalida', 400);  
  })
});

module.exports = router;
