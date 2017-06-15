(function() {
    // Q: How do controllers interact with services?
    // A:
    // controllers inject services to use
    // or
    // controllers add services as dependencies
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.getRooms();

      this.activeRoom;
      this.makeActive = function(room) {
        this.activeRoom = room;
      }

      this.createRoom = function() {
        var modalInstance = $uibModal.open({
          //animation: Room.animationsEnabled,
          //ariaLabelledBy: 'modal-title',
          //ariaDescribedBy: 'modal-body',
          templateUrl: 'templates/newRoom.html',
          controller: 'RoomCtrl',
          controllerAs: 'room',
          // size: size,
          // appendTo: parentElem,
          // resolve: {
          //   items: function () {
          //     return $ctrl.items;
          //   }
          // }
        });
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
