(function(window, angular, undefined){

	'use strict';

	var directives = angular.module('dribble.directives', []);

	directives.directive('shotList', function () {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: "partials/shots_list.html",
			scope: {
				shots: "=shotList"
			}
		}
	});

})(window, angular);