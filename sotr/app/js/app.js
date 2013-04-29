/*
 * App.js
 * Defines the application and routes
 */
'use strict';

// Declare app level module which depends on ngResource model
var app = angular.module('myApp', ['ngResource']);

// routing
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'ListCtrl'
    });
    $routeProvider.when('/detail/:topicId', {
        templateUrl: 'partials/detail.html',
        controller: 'DetailCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/list'
    });
}]);
