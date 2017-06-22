var express = require('express');
var router = express.Router();
var vehicles = require('../db/config').vehicles;
var counter = 6;




// router.get('/', function(req, res) {
//   res.render('posts',{
//     postList:posts.find()
//   });
// });



router.get('/', function(req, res) {
  res.render('vehicles', {
    vehicleList: vehicles.find()
  });
});


router.get('/:id', function(req, res) {
  res.send(vehicles.get(parseInt(req.params.id)));
});



router.post('/add', function(req, res) {
  vehicles.insert({
    id: counter,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model
  });
  counter++;
  res.redirect('/');

});

router.get('/remove/:id',function(req,res){
  vehicles.findAndRemove({

    id:parseInt(req.params.id)
  });
  res.redirect('/');
});


router.delete('/:id', function(req, res) {
  vehicles.findAndRemove({
    id: parseInt(req.params.id)
  });
  res.send(vehicles.find());
});


router.patch('/:id', function(req, res) {
  vehicles.findAndUpdate({
    id: parseInt(req.params.id)
  }, function(data) {
    data.year = req.body.year;
    data.make = req.body.make;
    data.model = req.body.model;
  });
  res.render('vehicles');

});


module.exports = router;
