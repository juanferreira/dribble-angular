(function(window, angular, undefined){

	'use strict';

	var services = angular.module('dribble.services', []);

	services.factory('dribble', ['$http', function($http){
		var getData = function(value){
			return $http.jsonp('http://api.dribbble.com/shots/' + value + '?callback=JSON_CALLBACK');
		};

		return {
			list: function(type){
				return getData(type);
			},

			id: function(id){
				return getData(id);
			}
		};

	}]);

})(window, angular);