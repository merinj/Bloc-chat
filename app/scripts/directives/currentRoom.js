(function() {

  /**
   *  This is a directive which you can think of as a controller and template
   *  file but will live inside of an another controller's template file.
   *  Inject services here.
   */
  function CurrentRoomDirective(Room, Message) {
    return {
      restrict: 'E',
      templateUrl: '/templates/messages.html',
      scope: {
        activeRoom: '=',
      },
      // This is the controller for the directive, but you don't inject
      // services here. You do it at the top
      controller: function($scope) {
        var self = this;

        // We want to know when the active changes which will change
        // when the user clicks on another room in the left nav

        // `newRoom` is coming from home.html when we pass in
        // `active-room="home.activeRoom"`
        $scope.$watch('activeRoom', function(newRoom) {
          if (newRoom === undefined) {
            return;
          }
           self.activeRoom = newRoom;
           self.messages = Message.getByRoomId(newRoom);
           console.log("messages");
        });
      },
      controllerAs: 'currentRoom'
    };
  }

  angular
       .module('blocChat')
       .directive('currentRoom', ['Room', 'Message', CurrentRoomDirective]);
})();
