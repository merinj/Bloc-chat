(function() {

  function RoomCtrl(Room,$uibModalInstance) {
    console.log('RoomCtrl');
    this.add = function() {
        console.log("add method called", this.roomName);
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
