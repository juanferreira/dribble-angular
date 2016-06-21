(function(window, angular, undefined){

	'use strict';

	var app = angular.module("dribble", ['ngRoute', 'dribble.controllers', 'dribble.filters', 'dribble.directives']);

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when("/:list", 
		{
			controller: "ShotsListCtrl", 
			templateUrl: "partials/shots_list.html"
		})
		.when("/shots/:id", {
			controller: "ShotsCtrl",
			templateUrl: "partials/shot.html"
		})
		.otherwise({redirectTo: "/"});
	}]);

})(window, angular);