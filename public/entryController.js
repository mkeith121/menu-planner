angular.module('menuApp.entryCont', [])

.controller('entryController', ['$scope', 'entryCreator', function($scope, entryCreator) {
    $scope.entry = {};
    $scope.entries = [];
    $scope.addEntry = function(entry) {
      entryCreator.updateEntry(entry, function(collection) {
        var today = new Date().getDay();
        var list = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var sorted_list = list.slice(today).concat(list.slice(0,today));
        console.log(sorted_list);
        var temp = collection.sort(function(a,b) { return sorted_list.indexOf(a.day) > sorted_list.indexOf(b.day); });
        console.log(temp);
        $scope.entries = collection;
      })
    };
  }
]);

