const axios = require('axios');
var methods = {}

methods.countryAll = (req, res) => {
  var url = `https://api-sandbox.tiket.com/general_api/listCountry?token=${process.env.TOKEN}&output=json`
  axios.get(url)
  .then(result => {
    res.send(result.data.listCountry);
  })
  .catch(err => {
    res.send(err);
  })
}

methods.airportAll = (req, res) => {
  var url = `https://api-sandbox.tiket.com/flight_api/all_airport?token=${process.env.TOKEN}&output=json`
  axios.get(url)
  .then(result => {
    res.send(result.data.all_airport.airport);
  })
  .catch(err => {
    res.send(err);
  })
}

methods.flightAll = (req, res) => {
  var url = `http://api-sandbox.tiket.com/search/flight?d=${req.query.d}&a=${req.query.a}&date=${req.query.date}&adult=${req.query.adult}&child=${req.query.child}&token=${process.env.TOKEN}&v=3&output=json`
  axios.get(url)
  .then(result => {
    res.send(result.data);
  })
  .catch(err => {
    res.send(err);
  })
}

module.exports = methods;
