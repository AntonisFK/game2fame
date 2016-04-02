myApp.controller('loginController', function($scope, $window, auth, loginFactory,$uibModal, $document){
  var top = 0;
  var duration = 1000;
  $scope.show_registration = false;
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.posts = [];
  $scope.logOut = function(){
    auth.logOut();
  }
  // $scope.currentUser = function(){
  //   auth.currentUser();
  //   console.log(auth.currentUser())
  // }
  // $scope.currentUser()
  $scope.currentUser = auth.currentUser()
});
