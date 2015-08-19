var weatherServices = angular.module('weatherServices', ['ngResource']);

weatherServices.factory('Weather', ['$resource',
  function($resource){
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=city', {}, {
      query: {method:'GET', params:{city:'weather'}, isArray:true}
    });
  }]);