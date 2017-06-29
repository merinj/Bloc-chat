/**
 * This file bootstraps angular which is necessary for every
 * angular project.
 *
 * This file also provides the configuration for angular, which is
 * only done in this file and is performed by calling `.config`
 */

(function() {
   function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        // This is where you define the various other pages
        // on the site that you have links to (<a href=""></a>)
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
             .state('room', {
                url: '/room',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/newRoom.html'
            });
        /*    .state('messages', {
               url: '/messages',
               controller: 'MessageCtrl as message',
               templateUrl: '/templates/messages.html'
           });*/
    }

    function BlocChatCookies($cookies,$uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
        $uibModal.open({
          //animation: Room.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'templates/userName.html',
          controller: 'AddUserNameCtrl',
          controllerAs: 'userNameCtrl',
        });
      }
    }

    angular
         // REQUIRED
         .module('blocChat',['ui.router','ui.bootstrap','firebase','ngCookies'])
         // OPTIONAL
         .config(config)
         .run(['$cookies','$uibModal', BlocChatCookies]);
})();
