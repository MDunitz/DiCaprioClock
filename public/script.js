angular.module('myApp', [
  'ngRoute',
  'timer'
  //'ngstyle'
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

    .when('/viewTimerYoung',{
        templateUrl: 'views/timer.html',
        //controller: 'timerController'
    })
    .when('/viewTimer',{
        templateUrl: 'views/timerTwo.html',
        //controller: 'timerController'
    })

    .when('/viewYoung',{
        templateUrl: 'views/young.html',
        //controller: 'youngController'
    });

}]);