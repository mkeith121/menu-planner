angular.module('menuApp.welcomeCont', [])

.controller('welcomeController', ['$scope', function($scope) {
  $scope.name = '';
  $scope.day = new Date();

}]);