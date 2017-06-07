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

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            .state('room', {
               url: '/',
               controller: 'RoomCtrl as room',
               templateUrl: '/templates/home.html'
           });
    }

    angular
         // REQUIRED
         .module('blocChat',['ui.router', 'firebase'])
         // OPTIONAL
         .config(config);
})();
