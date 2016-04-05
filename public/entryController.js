app.controller('entryController', function($scope) {
  $scope.entry = {};
  $scope.entries = [];
  $scope.addEntry = function(entry) {
    var myEntry = angular.copy(entry);
    $scope.entries.push(myEntry);
    $scope.entry = {};
  };
})