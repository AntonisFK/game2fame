var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchSchema = new mongoose.Schema({
  _postedby: String,
  name: String,
  players:[{type:String}],
  btc: Number,
  btcWallet: {type:String, defualt: "39WFN5C74e47auxaPDZoEKQU3EuNhmpR7z"},
  datetime: {type: Date, trim: true },
  game: {type:String, trim: true}
})

mongoose.model('Match', MatchSchema)
