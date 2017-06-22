var Loki = require('lokijs');
var db = new Loki('loki.json');
var vehicles = db.addCollection('vehicles');

vehicles.insert([{
    "id": 1,
    "year": 2016,
    "make": "Cadillac",
    "model": "Escalade"
  },
  {
    "id": 2,
    "year": 2017,
    "make": "Honda",
    "model": "Civic"
  },
  {
    "id": 3,
    "year": 2016,
    "make": "Ford",
    "model": "Fusion"
  },
  {
    "id": 4,
    "year": 2015,
    "make": "Toyota",
    "model": "Tacoma"
  },
  {
    "id": 5,
    "year": 2016,
    "make": "Subaru",
    "model": "WRX"
  },

]);

module.exports = {
  vehicles: vehicles
};
