(function() {
    function RoomCtrl($scope) {
      scope.room = rooms;
    }

    angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', RoomCtrl])
})
