var myApp = angular.module('myApp', ['ui.bootstrap', 'ui.router', 'ui.navbar', 'jcs-autoValidate', 'ngAnimate', 'ngSanitize'])
.value('duScrollDuration', 1000)
 .value('duScrollOffset', 30);

myApp.run(function(defaultErrorMessageResolver){
  defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages){
    errorMessages['badName'] = 'Name must only contain Alpha characters.'
    });
  }
);

myApp.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('index',{
        url: '/',
        templateUrl: './../static/partials/sign_up.html',
        controller: 'authController',
        onEnter: function($state, auth){
          if(auth.isLoggedIn()){
            $state.go('home');
          }
        }
    })
    .state('home',{
        url: '/home',
        templateUrl: './../static/partials/homepage.html',
        controller:'loginController',
        onEnter: function($state, auth){
          if(!auth.isLoggedIn()){
            $state.go('index');
          }
        }
    })

    .state('game_room', {
      url: '/game_room',
      templateUrl: './../static/partials/game_room.html',
      controller: 'loginController',
      onEnter: function($state, auth){
        if(!auth.isLoggedIn()){
          $state.go('index');
        }
      }
    })

    .state('profile', {
      url: '/profile',
      templateUrl: './../static/partials/profile.html',
      controller: 'loginController',
      onEnter: function($state, auth){
        if(!auth.isLoggedIn()){
          $state.go('index');
        }
      }
    });

});
