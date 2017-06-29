(function() {

  function RoomCtrl(Room,$uibModalInstance) {

    this.add = function() {
      Room.add(this.roomName);
      $uibModalInstance.close();
    };

    this.cancel = function() {
      $uibModalInstance.close();
    };
  }

  angular
       .module('blocChat')
       .controller('RoomCtrl',['Room', '$uibModalInstance',RoomCtrl]);
})();
