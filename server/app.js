const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ticket-overflow');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connection success');
})
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.set('port', process.env.PORT || 3000);
app.use('/', require('./routes/api'));
app.listen(app.get('port'), ()=> {
  console.log('App listen to port ' + app.get('port'));
})
