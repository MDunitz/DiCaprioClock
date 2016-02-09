angular.module('myApp', [
  'ngRoute',
  // 'myApp.viewTimer',
  // 'myApp.viewOld',
  // 'myApp.viewYoung',
  // 'myApp.viewTimer',
  // 'myApp.viewIndex'
])

.config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/',{
        templateUrl: 'views/open.html'
      })
    .when('/viewIndex',{
        templateUrl: 'views/Index.html',
        //controller: 'indexController'
    })

    .when('/viewOld',{
        templateUrl: 'views/old.html',
        //controller: 'oldController'
    })

    .when('/viewTimer',{
        templateUrl: 'views/timer.html',
        //controller: 'timerController'
    })

    .when('/viewYoung',{
        templateUrl: 'views/young.html',
        //controller: 'youngController'
    });

}]);