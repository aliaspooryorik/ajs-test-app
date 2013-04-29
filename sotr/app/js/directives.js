'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);


/*
With directives you can bind data in multiple ways:
Isolate scope (see http://egghead.io/video/angularjs-isolate-scope-review/)

    scope: {foo: "@"} : reads attribute value <div foo="1234">
    scope: {foo: "="} : Two way data binding to an object : <input ng-model="somefoo">
    scope: {foo: "&"} : allows you to call method in controller <div ng-click="call(number)">
 */

app.directive("paging", function () {
    return {
        restrict: "E", // E= element, A=Attribute, C=Class, M=Comment
        templateUrl: "templates/directives/paging.html",
        scope: {
            numOfPages: '@' // @ means the attribute, matches num-of-pages attribute value
        },
        link: function(scope, element, attrs) {

            //console.info(scope.numOfPages);
            console.info(attrs.numOfPages);
            scope.pages = [];
            for(var pageNumber=0; pageNumber<scope.numOfPages; pageNumber++){
                alert(pageNumber);
                scope.pages.push(pageNumber);
            }
        }

    };
});