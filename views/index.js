angular.module('myApp.viewIndex', ['ngroute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/viewIndex',{
        templateUrl: 'views/Index.html',
        controller: 'indexController'
    });
}])

.controller('indexController',[function(){

}]);