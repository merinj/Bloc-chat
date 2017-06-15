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
    }

    angular
         // REQUIRED
         .module('blocChat',['ui.router','ui.bootstrap','firebase'])
         // OPTIONAL
         .config(config);
})();
