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

// Creating the controller in this fashion, by assigning functions to scope properties,
// allows us to call `add` or `subtract` which are defined within the `SimpleAddingMachingController` `$scope`.
