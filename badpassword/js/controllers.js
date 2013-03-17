//'use strict';

/* Controllers */
var app = angular.module("badpasswordapp", []);

// $http is automatically passed via DI!
function PasswordCtrl($scope, $http) {
	var source = 'top10000';
	
	var url = 'json/' + source + '.json'; // normally call to webservice 
	$http.get(url).success(function(data) {
		$scope.passwords = data;
	});
	
	$scope.cssfloat = 'right';
	$scope.cssdisplay = 'block';
}
