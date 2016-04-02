myApp.factory('loginFactory', function($http){
  var factory = {};
  var users = [];
  factory.login = function(loginInfo, callback){
    console.log(loginInfo);
    $http.post('/login', loginInfo).success(function(output){
       console.log(output)
      callback(output);
    })
  }
  factory.register = function(newUser, callback){
    console.log(newUser, "loginFactory");
    $http.post('/sign_up', newUser).success(function(output){
      console.log(output, "output from factory")
      callback(output);
    })
  }
  return factory;
})
