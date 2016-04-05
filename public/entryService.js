angular.module('menuApp.entryServ', [])

.service('entryCreator', function() {
  this.dayEntry = {
    day: '',
    entry: {
      Breakfast: ' ',
      Lunch: ' ',
      Dinner: ' ',
      Snack:' '
    }
  };
  this.dayEntries = [];

  this.getDayEntry = function(entry) {
    var exists = false;
    if(this.dayEntries.length > 0) {
      this.dayEntries.forEach(function(item) {
        if(!exists) {
          if(item.day === entry.day) {
            exists = item;
          } 
        }
      });
    }
    return exists;
  };

  this.updateEntry = function(entry, callback) {
    var current = this.getDayEntry(entry);
    if(current) {
      current.entry[entry.meal] = entry.input;
    } else {
      var myEntry = angular.copy(this.dayEntry);
      myEntry.day = entry.day;
      myEntry.entry[entry.meal] = entry.input;
      this.dayEntries.push(myEntry);
    }
    callback(this.dayEntries);
  };

});
