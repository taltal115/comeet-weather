'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['myApp', 'ngRoute'])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.when('/wether', {
            templateUrl: 'wether/view1.html',
            controller: 'View1Ctrl'
        });
        $routeProvider.otherwise({redirectTo: '/wether'});
    }]);
