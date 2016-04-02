var mongoose = require('mongoose');
var Match = mongoose.model('Match');

module.exports = (function() {
  return{
    index: function(req, res){
      Match.find({}, function(err, matches){
        res.json(matches);
      })

    },
    create: function(req, res){
      console.log(req.body.postedBy);
      Match.create({name: req.body.name, players: req.body.players, game: req.body.game, btcWallet: '39WFN5C74e47auxaPDZoEKQU3EuNhmpR7z', btc: req.body.btc, datetime: req.body.datetime, _postedby: req.body.postedBy }, function(err, results){
        if(err){
          console.log(err);
        }else {
          console.log(results, "from the databse")
          res.json(results);
        }
      })
    }
  }
})();
