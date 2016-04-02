var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport');
var jwt = require('express-jwt');
var secret = 'sauce';
var auth = jwt({secret: secret, userProperty: 'payload'});

module.exports = {

  newReg: function(req, res, next){
    if(!req.body.username || !req.body.password || !req.body.email){
      return res.status(400).json({message: 'Please fill out all fields'});
    }
    if(req.body.password !== req.body.confirm_password){
      return res.status(400).json({message: 'Passwords do not match'})
    }

    var user = new User();

    user.username = req.body.username;

    user.email = req.body.email;

    user.twitch_id = req.body.twitch_id;

    user.gamertag = req.body.gamertag;

    user.about_me = req.body.about_me;

    user.setPassword(req.body.password)

    user.save(function (err){
      if(err){ return next(err); }

      return res.json({token: user.generateJWT()})
    });
  },
  logIn: function(req, res, next){
    if(!req.body.username || !req.body.password){
      return res.status(400).json({message: 'Please fill out all fields'});
    }

    passport.authenticate('local', function(err, user, info){
      if(err){ return next(err); }

      if(user){
        return res.json({token: user.generateJWT()});
      } else {
        return res.status(401).json(info);
      }
    })(req, res, next);
  }
}
