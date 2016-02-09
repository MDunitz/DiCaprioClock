angular.module('myApp')

.controller('MainController', ['$scope', '$location', function($scope, $location){
    
    $scope.today = new Date();
    $scope.currentDay = $scope.today.getDate();
    $scope.currentMonth = $scope.today.getMonth()+1; //January is 0!
    $scope.currentYear = $scope.today.getFullYear();
    $scope.currentMilliseconds = $scope.today.getTime();
    

    $scope.userAge=function(){
        var age = $scope.currentYear - $scope.birthYear;
        $scope.DOB=$scope.birthMonth.toString() + ' ' + $scope.birthDay.toString() + ', ' + $scope.birthYear.toString();
        $scope.compareYear(age);
        console.log('DOB', $scope.DOB)

    }
    $scope.compareYear=function(Age){
        console.log('age', Age);
        
        if(Age > 25){
            $location.path('/viewOld/');
        }else if(Age <16){
            $location.path('view/Young')
        }else if(Age<20){
            var birthMS = Date.parse($scope.DOB);
            console.log('birthMS', birthMS)
            $scope.compareDate($scope.currentMilliseconds, birthMS, true);
        }else{
            var birthMS = Date.parse($scope.DOB);
            $scope.compareDate($scope.currentMilliseconds, birthMS, false)
        }
    }   

    $scope.compareDate=function(currentMS, birthMS, under20){
        console.log('made it to compare date', currentMS, birthMS, under20)
        //else
            //create countdown timer
            //show thirsty pic

    }


}])