

var weatherApp = angular.module('weatherApp', ['weatherFilters']);

weatherApp.controller('WeatherCtrl', ['$scope', '$http', function ($scope, $http) {
	
	$scope.city = 'Sydney';
	
	$http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.city).success(function(data) {
	$scope.weather = data;
	});
	
}]);