(function() {

  function MessageCtrl(Message) {
    this.submit = function(activeRoom) {
         console.log("calling........", activeRoom, this.newMessage);

      Message.send(activeRoom,this.newMessage);

    };


  }

  angular
       .module('blocChat')
       .controller('MessageCtrl',['Message',MessageCtrl]);
})();
