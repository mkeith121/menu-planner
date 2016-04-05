angular.module('menuApp.entryCont', [])

.controller('entryController', ['$scope', 'entryCreator', 'sortMagic', function($scope, entryCreator, sortMagic) {
    $scope.entry = {};
    $scope.entries = [];
    $scope.sortDay = '';
    $scope.addEntry = function(entry) {
      entryCreator.updateEntry(entry, function(collection) {
        console.log(collection);
        $scope.entries = collection;
      })
    };
    $scope.reSort = function(day) {
      sortMagic.reSort($scope.entries, function(newColl) {
        $scope.entries = newColl;
      }, day);
    };
  }
]);

