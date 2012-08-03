function ProductCtrl($scope, $http) {
	
	$http.get('json/products.json').success(function(data) {
		$scope.products = data;
	});
	
	$scope.orderProp = "price"; // note: '-' sign sorts in reverse
}


//ProductCtrl.$inject = ['$scope', '$http'];