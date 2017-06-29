(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(room) {
      return $firebaseArray(ref.orderByChild('RoomId').equalTo(room));
   };

   Message.send = function(activeRoom,newMessage) {
       // Send method logic
       messages.$add({
         RoomId: activeRoom, username:$cookies.get('blocChatCurrentUser'),
     content:newMessage});
   };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$cookies',Message]);
})();
