//matches controller
 myApp.controller('MatchmakingsController', function($scope, $location, MatchmakingFactory){

   MatchmakingFactory.index(function(matches){
     $scope.matches = matches;
     console.log($scope.matches)
   })

   MatchmakingFactory.checkwallet(function(wallet){
     $scope.wallet = wallet;
     console.log(wallet)
   })

   $scope.create = function(){
     $scope.newMatch.postedBy = $scope.currentUser;
     console.log($scope.currentUser);
     $scope.newMatch.available_balance = $scope.wallet.data.available_balance
     $scope.newMatch.pending_balance = $scope.wallet.data.pending_received_balance

     MatchmakingFactory.create($scope.newMatch, function(matches, btcAddress){
       $scope.matches = matches;
       console.log($scope.matches)
       console.log(btcAddress)
       $scope.btcAddress = btcAddress;

     })
     console.log($scope.newMatch)
     $scope.newMatch = null;

   }
 })
