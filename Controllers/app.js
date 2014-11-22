var app = angular.module('app', []);
app.controller('SimpleAddingMachingController', function ($scope) {
  $scope.counter = 0;
  $scope.add = function (amount) {
    $scope.counter += amount;
  };
  $scope.subtract = function (amount) {
    $scope.counter -= amount;
  };
});
