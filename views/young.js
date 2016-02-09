angular.module('myApp.viewYoung', ['ngroute'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/viewYoung',{
        templateUrl: 'views/young.html',
        controller: 'youngController'
    });
}])

.controller('youngController',[function(){

}]);
