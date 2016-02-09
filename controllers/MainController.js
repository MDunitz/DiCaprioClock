angular.module('myApp', [])

console.log('in mainController.js')

myApp.controller('MyController', ['$scope', function($scope){
    $scope.currentYear=Date.today().getYear;
    $scope.currentMonth=Date.today().getMonth;
    $scope.currentDate=Date.today().getDay;


    $scope.userDOB=function(){
       var age = $scope.currentYear - $scope.birthYear
        console.log('year', $scope.currentYear);
        console.log('month', $scope.currentMonth);
        console.log('date', $scope.currentDate);

       $compareYear(age);
    }
    $scope.compareYear=function(Age){
        if(Age > 25){
            //show baby pic
        }else if(Age <16){
            //show old man pic
        }else if(Age<20){
            //calculate milliseconds to 20, add timer countdown template
            //show revenant picture
        }
        else{
            compareDate(Age)
        }
    }   

    $scope.compareDate=function(){

        //else
            //create countdown timer
            //show thirsty pic

    }


}])