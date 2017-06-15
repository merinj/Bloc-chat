(function() {



  function CurrentRoomDirective(Room) {
    return {
      restrict: 'E',
      templateUrl: '/scripts/directives/currentRoom.html',
      scope: {
        activeRoom: '=',
      },
      controller: function($scope) {
        var self = this;
        $scope.$watch('activeRoom', function(newValue, oldValue) {
          self.messages = Room.fetchMessages(newValue);
        });
      },
      controllerAs: 'currentRoom'
    };
  }

  angular
       .module('blocChat')
       .directive('currentRoom', CurrentRoomDirective);
})();
