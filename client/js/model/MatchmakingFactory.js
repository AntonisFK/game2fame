 myApp.factory('MatchmakingFactory', function($http){
     var factory = {};
     var matches = [];

     factory.index = function(callback){
       console.log("factory indexS")
       $http.get('/matches').success(function(output){
         console.log("hit index match factory", output);
         console.log(output)
         matches = output;
         callback(matches)
       })
     }
     factory.create = function(match, callback){
    console.log("create factory");
    console.log(match);
    $http.post('/matches', match).success(function(output){
    matches.push(output);
    btcAddress = "39WFN5C74e47auxaPDZoEKQU3EuNhmpR7z"
    callback(matches, btcAddress)
    })
    // match.datetime.Remove(match.datetime.LastIndexOf('T'));

  }

  //get btc price
     factory.checkwallet = function(callback){
       $http.get('https://block.io/api/v2/get_balance/?api_key=7c4b-6e02-4121-46e3').success(function(output){
         callback(output)
       })
     }
     return factory;
   });
