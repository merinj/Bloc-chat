(function() {
  function Room($firebaseArray) {
    var Room={};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    Room.getRooms = function() {
      return rooms;
    };

    Room.add = function(room) {
      console.log("add method in Room.js was called", room);
      var rooms = $firebaseArray(ref);
      rooms.$add(room);
    };

    Room.fetchMessages = function(room) {
      return
    }

    return Room;
    // { all: ... }
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
