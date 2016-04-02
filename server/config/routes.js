var use = require('../controllers/users.js');
var jwt = require('express-jwt');
var secret = 'sauce';
var auth = jwt({secret: secret, userProperty: 'payload'});
var request = require('request');
var matches = require('./../controllers/matches.js');

module.exports = function(app){

  app.post('/register', function(req, res, next){
    use.newReg(req, res, next)
  });

  app.post('/login', function(req, res, next){
    use.logIn(req, res, next)
  });
  app.get('/matches', function(req, res){
   console.log("get /matches");
   matches.index(req, res);
 })

 app.post('/matches', function(req, res){
   console.log('post /matches');
   matches.create(req, res);
 })
};
