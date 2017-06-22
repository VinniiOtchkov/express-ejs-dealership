var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var port = process.env.PORT || 8200;

var vehicleRoutes = require('./routes/vehicles');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.use('/',vehicleRoutes);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.listen(port, function() {
  console.log('listening on: ', port);
});
