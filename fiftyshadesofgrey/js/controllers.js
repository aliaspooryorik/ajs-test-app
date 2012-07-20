function GreyCtrl($scope) {
	
	var Swatch = function(id, backgroundColour, fontColour){
		this.id = id;
		this.backgroundColour = backgroundColour;
		this.fontColour = fontColour;
	}
	
	var fiftyshades = [];
	var loops = 50;
	var x = -2;
	var inverse = '#fff';
	for ( var i=1; i < loops+1; i++ ){
		x = x+5;
		if (i>25) inverse = 'rgb(0,0,0)';
		
		fiftyshades.push( new Swatch( i, 'rgb('+x+','+x+','+x+')', inverse ) );
	}
	
	$scope.orderProp = "-id"; // note: '-' sign sorts in reverse
	$scope.now = new Date();
	
	$scope.destroy = function(Grey){
		var index = $scope.greys.indexOf(Grey);
		$scope.greys.splice(index, 1);
	};
	$scope.reset = function(){
		$scope.greys = fiftyshades.slice(0); // using slice as arrays are passed by ref in JavaScript
	};
	
	$scope.highlight = function(Grey){
		// pick a colour at random
		var colours = ['HotPink','DarkMagenta','GreenYellow','DarkOrange','SteelBlue','Maroon'];
		var rand = Math.floor(Math.random() * colours.length);
		Grey.backgroundColour = colours[rand];
	}

	$scope.addSwatch = function(){
		var newSwatch = new Swatch($scope.greys.length+1, '#fff', '#000');
		$scope.highlight(newSwatch);
		$scope.greys.push(newSwatch);
	}
	
	$scope.technicolour = function(){
		for ( var i=0; i < $scope.greys.length; i++ ){
			$scope.highlight($scope.greys[i]);
		}
	}
	$scope.reset();
}