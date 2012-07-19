function GreyCtrl($scope) {
	var fiftyshades = [];
	var loops = 50;
	var x = -2;
	var inverse = 255;
	for ( var i=1; i < loops+1; i++ ){
		x = x+5;
		if (i>25) inverse = 0;
		fiftyshades.push( { "id": i, "tint": x, "inverse": inverse } );
	}
	
	$scope.orderProp = "tint"; // note: '-' sign sorts in reverse
	$scope.now = new Date();
	
	$scope.destroy = function(grey){
		var index = $scope.greys.indexOf(grey);
		$scope.greys.splice(index, 1);
	}
	$scope.reset = function(){
		$scope.greys = fiftyshades.slice(0); // using slice as arrays are passed by ref in JavaScript
	}
	
	$scope.reset();
}