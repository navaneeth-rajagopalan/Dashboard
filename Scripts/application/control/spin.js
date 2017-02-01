angular
	.module('app.control')
	.directive('spin', ['$http', function ($http) {
		return {
			restrict: 'AE',
			templateUrl: 'Scripts/application/control/spin.html',
			link: function (scope, element, attrs) {
				scope.loading = function () {
					return $http.pendingRequests.length > 0;
				};
			}
		};
	}]);