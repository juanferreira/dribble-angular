(function(window, angular, undefined){
	
	'use strict';

	var controllers = angular.module('dribble.controllers', ['dribble.services']);

	controllers.controller('ShotsListCtrl', ['$scope', '$routeParams', 'dribble', function($scope, $routeParams, dribble){	
		var path = $routeParams.list,
			acceptablePaths = ['popular', 'debuts', 'everyone'];

		if(acceptablePaths.indexOf(path) == -1){
			path = "popular";
		}

		dribble.list(path).success(function(data){
			$scope.list = data;
		});
	}])

	.controller('ShotsCtrl', ['$scope', '$routeParams', 'dribble', function($scope, $routeParams, dribble){
		var id = $routeParams.id;

		dribble.id(id).success(function(data){
			$scope.shot = data;
		});
	}]);

})(window, angular);