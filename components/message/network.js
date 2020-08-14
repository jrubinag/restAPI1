const express = require('express');
const response = require('../../network/response');

const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  const filterMessages = req.query.user || null;
  controller
    .getMessages(filterMessages)
    .then((list) => response.success(req, res, list, 200))
    .catch((e) => {
      response.error(
        req,
        res,
        'unexpected error',
        500,
        'log interno del error'
      );
    });
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

router.patch('/:id', (req, res) => {
  console.log('hjello there L', { id: req.params.id, text: req.body.message });
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 300);
    })
    .catch((e) => {
      response.error(req, res, 'Error interno', 500, e);
    });
});

router.delete('/:id', (req, res) => {
  controller
    .deleteMessage(req.params.id)
    .then(() =>
      response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
    )
    .catch((e) => {
      response.error(req, res, 'Error interno', 500, e);
    });
});
module.exports = router;
