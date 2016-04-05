angular.module('menuApp.welcomeCont', [])

.controller('welcomeController', ['$scope', function($scope) {
  $scope.name = '';
  $scope.day = new Date();
  $scope.show = false;
  $scope.render = function() {
    if($scope.name) {
      $scope.show = true;
    }
  };

}]);