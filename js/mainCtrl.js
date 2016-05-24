angular.module("foodApp").controller("mainCtrl", function($scope, $log, foodService) {

  $scope.name = "Jared";
  $scope.$watch("name", function() {
    $scope.name2 = $scope.name + "2";
  });

  $scope.name3 = foodService.name;
  $scope.name4 = foodService.myName;

});
