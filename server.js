const express = require('express');
const bodyParser = require('body-parser');  
const router = require('./network/routes')

const port = 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app)
app.use('/app', express.static('./public'));

app.listen(port);
console.log(`La aplicacion esta escuchando en ${port}...`);
