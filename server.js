const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

const dbUrl =
  'mongodb+srv://db_user_test:QwHa49XONqb0bwlI@cluster0.22i3w.mongodb.net/telegram?retryWrites=true&w=majority';
db(dbUrl);
const port = 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);
app.use('/app', express.static('./public'));

app.listen(port);
console.log(`La aplicacion esta escuchando en ${port}...`);
