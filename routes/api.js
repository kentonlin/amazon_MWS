var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController')

router.get('/:resource', function (req, res, next){

  var resource = req.params.resource

  if (resource == 'user') {
    UserController.find(req.query, function(err, results){
      if (err) {
        res.json({
          confirmation: 'fail',
          message: err
        })
        return;
      }
      res.json({
        confirmation: 'success',
        results: results
      })
      return;
    });
  }
});

router.get('/:resource/:id', function(req, res, next){
  var resource = req.params.resource;
  var id = req.params.id;

  if (resource == 'user') {
    UserController.findById(id, function(err, result){
      if (err) {
        res.json({
          confirmation: 'fail',
          message: 'Not Found'
        });
        return;
      }
      res.json({
        confirmation: 'success',
        result: result
      });
      return;
    });
  }
});

router.post('/:resource', function(req, res, next){
  var resource = req.params.resource;
  var body = req.body;
  if ( resource == 'user') {
    UserController.create(body, function(err, result){
      if(err){
        res.json({
          confirmation: 'fail',
          message: err
        });
        return;
      }
      res.json({
        confirmation: 'success',
        result: result
      });
      return;
    });
  }

});

module.exports = router;
