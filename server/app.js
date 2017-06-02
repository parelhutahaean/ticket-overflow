const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.set('port', process.env.PORT || 3000);
app.use('/', (req, res) => {
  res.send('Alive')
})
app.listen(app.get('port'), ()=> {
  console.log('App listen to port ' + app.get('port'));
})
