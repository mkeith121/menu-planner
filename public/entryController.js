app.controller('entryController', function($scope) {
  $scope.entries = [];
  $scope.addEntry = function(entry) {
    console.log(entry);
  };
})