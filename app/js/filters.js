angular.module('weatherFilters', []).filter('direction', function() {
	return function(input) {
		return input < 11.25 ? 'N' :
				input < 33.75 ? 'NNE' :	
				input < 56.25 ? 'NE' :	
				input < 78.75 ? 'ENE' :	
				input < 101.25 ? 'E' :	
				input < 123.75 ? 'ESE' :	
				input < 146.25 ? 'SE' :	
				input < 168.75 ? 'SSE' :	
				input < 191.25 ? 'S' :	
				input < 213.75 ? 'SSW' :	
				input < 236.25 ? 'SW' :	
				input < 258.75 ? 'WSW' :	
				input < 281.25 ? 'W' :	
				input < 303.75 ? 'WNW' :	
				input < 326.25 ? 'NW' :	
				input < 348.75 ? 'NNW' :	
				'N';
	};
});