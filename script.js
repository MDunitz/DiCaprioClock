
console.log('in script.js');

var myApp=angular.module('myApp', [
  'ngRoute',
  'myApp.viewTimer',
  'myApp.viewOld',
  'myApp.viewYoung',
  'myApp.viewTimer',
  'myApp.viewIndex'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/views/index.ejs'});
}]);