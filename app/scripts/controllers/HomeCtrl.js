(function() {
    // Q: How do controllers interact with services?
    // A:
    // controllers inject services to use
    // or
    // controllers add services as dependencies
    function HomeCtrl(Room) {
      this.rooms = Room.getRooms();
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
