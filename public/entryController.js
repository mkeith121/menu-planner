app.controller('entryController', function($scope) {
  $scope.entries = [];
  $scope.addEntry = function(entry) {
    $scope.entries.push(entry);
  };
})