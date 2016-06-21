(function(window, angular, undefined){
	
	'use strict';

	var filters = angular.module('dribble.filters', []);

	filters.filter('dateFilter', ['$filter', function($filter){
		return function(value, format){
			if(value){
				value = Date.parse(value);
			}

			return $filter('date')(value, format);
		}
	}]);

})(window, angular);