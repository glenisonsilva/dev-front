(function () {
    'use strict';

    angular.module('app').config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                 .when('/', {
                     templateUrl: '/templates/views/home.html',
                     controller: 'taskController'
                 })
                
               
                 .otherwise({
                     redirectTo: '/'
                 });
        }]);
}());