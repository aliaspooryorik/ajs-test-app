'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
        $routeProvider.when('/detail/:topicId', {templateUrl: 'partials/detail.html', controller: 'DetailCtrl'});
        $routeProvider.otherwise({redirectTo: '/list'});
    }]);
