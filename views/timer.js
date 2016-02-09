angular.module('myApp.viewTimer', ['ngroute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/viewTimer',{
        templateUrl: 'views/timer.html',
        controller: 'timerController'
    });
}])

.controller('timerController',[function(){

}]);