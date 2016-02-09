angular.module('myApp')

.factory('myFactory', function(){
    
    return {}
})

.controller('MainController', ['$scope', '$location', 'myFactory', function($scope, $location, myFactory){
    

    $scope.timeFactory = myFactory;


    $scope.today = new Date();
    $scope.currentDay = $scope.today.getDate();
    $scope.currentMonth = $scope.today.getMonth()+1; //January is 0!
    $scope.currentYear = $scope.today.getFullYear();
    $scope.currentMilliseconds = $scope.today.getTime();
 
   

    $scope.userAge=function(){
   
        var age = $scope.currentYear - $scope.birthYear;
        //$scope.DOB=$scope.birthMonth.toString() + ' ' + $scope.birthDay.toString() + ', ' + $scope.birthYear.toString();
        $scope.compareYear(age);
        //console.log('DOB', $scope.DOB)

    }
    $scope.compareYear=function(Age){
        console.log('age', Age);

        
        if(Age > 25){
            $location.path('/viewOld/');
        }else if(Age <18){
            $location.path('/viewYoung/');
        }else if(Age<20){
            $scope.goalYear=Number($scope.birthYear)+20
            console.log($scope.goalYear)
            $scope.birthday = new Date($scope.goalYear, $scope.birthMonth, $scope.birthDay);
            console.log('birthday: under 20', $scope.birthday);
            $scope.bdayMS=$scope.birthday.getTime();
            console.log('bdayMS', $scope.bdayMS);
            myFactory.bdayMS=$scope.bdayMS
            $location.path('/viewTimerYoung/');
        }else{
            $scope.goalYear=Number($scope.birthYear)+25
            $scope.birthday = new Date($scope.goalYear, $scope.birthMonth, $scope.birthDay);
            console.log('birthday: over 20', $scope.birthday);
            $scope.bdayMS=$scope.birthday.getTime();
            console.log('bdayMS', $scope.bdayMS);
            myFactory.bdayMS=$scope.bdayMS
            $location.path('/viewTimer/');
        }
        
    }   

    $scope.old={
        background: 'url(http://cdn.scahw.com.au/cdn-1d11363984f9f20/imagevaultfiles/id_372185/cf_3/leonardo-dicaprio-titanic.jpg)'
    }


}])