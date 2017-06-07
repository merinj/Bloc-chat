(function() {
  function Room($firebaseArray) {
    var Room={};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    Room.getRooms = function() {
      return rooms;
    };
    return Room;
    // { all: ... }
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
