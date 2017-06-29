(function() {

  function AddUserNameCtrl($uibModalInstance,$cookies) {

  this.setUsername = function() {

        // set the username on $cookies
        console.log("set func called");
        console.log(this.userName);

          $cookies.put('blocChatCurrentUser', this.userName);
          $uibModalInstance.close();

    }
  }

  angular
       .module('blocChat')
       .controller('AddUserNameCtrl',AddUserNameCtrl);
})();
