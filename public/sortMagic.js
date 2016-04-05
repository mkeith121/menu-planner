angular.module('menuApp.sortServ', [])

.service('sortMagic', function() {
  this.reSort = function(collection, callback,  day) {
    var list = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var today;
    if(day) {
      today = list.indexOf(day);
    } else {
      today = new Date().getDay();
    };
    var sorted_list = list.slice(today).concat(list.slice(0,today));
    var temp = collection.sort(function(a,b) { return sorted_list.indexOf(a.day) > sorted_list.indexOf(b.day); });
    callback(temp);
  };
});