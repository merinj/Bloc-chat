(function() {
  function Message($firebaseArray,Room) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(room) {
        return $firebaseArray(ref.orderByChild('RoomId').equalTo(room));
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
