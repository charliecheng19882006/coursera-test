(function (){

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope){
  $scope.list = "";
  $scope.totalNumber = 0;
  $scope.outPut = "";
  $scope.calculateNumberOfItems = function(){
    $scope.totalNumber = convertInputToArrayLength($scope.list);
    printOutPut($scope.totalNumber);
  };

  function convertInputToArrayLength(string){
    if (string == ""){
      return 0;
    } else {
      var array = string.split(',');
      return array.length;
    }
  }

  function printOutPut(number){
    if (number == 0){
      $scope.outPut = "Please enter data first"
    }
    else if (number <= 3 && number > 0){
      $scope.outPut = "Enjoy!"
    }
    else {
      $scope.outPut = "Too much!"
    }
  }
});

})();
