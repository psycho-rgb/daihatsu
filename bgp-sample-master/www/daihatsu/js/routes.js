angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('read', {
    url: '/page1',
    templateUrl: 'templates/read.html',
    controller: 'readCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});