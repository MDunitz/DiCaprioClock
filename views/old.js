angular.module('myApp.viewOld', ['ngroute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/viewOld',{
        templateUrl: 'views/old.html',
        controller: 'oldController'
    });
}])

.controller('oldController',[function(){

}]);