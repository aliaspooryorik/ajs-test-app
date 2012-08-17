function FormCtrl($scope) {
	
	// track object
	var Track = function(name, artist, album){
		this.name = name;
		this.artist = artist;
		this.album = album;
	}
	
	$scope.addTrack = function(){
		$scope.tracks.push( new Track() );
	};
	
	$scope.removeTrack = function(Track){
		var index = $scope.tracks.indexOf(Track);
		$scope.tracks.splice(index, 1);
	};
	
	$scope.artists = [ 
		{"name":"David Hasselhoff"},
		{"name":"Tina Turner"}
	];
	
	// this would normally be loaded from a webservice as JSON
	$scope.tracks = [
		{
			"name": "Rhinestone Cowboy",
			"artist": $scope.artists[0],
			"album": "Sings America"
		},
		{
			"name": "Private Dancer",
			"artist": $scope.artists[1],
			"album": "Tina!"
		}
	];
	
}


//ProductCtrl.$inject = ['$scope', '$http'];