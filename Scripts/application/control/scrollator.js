angular
	.module('app.control')
	.directive('scrollator', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			scope: {
				options: '=?'
			},
			link: function (scope, elem, attrs) {
				$timeout(function () { 
					$(elem).mCustomScrollbar(_({
						alwaysShowScrollbar: 2,
						theme: '3d-thick-dark'
					}).extend(scope.options || {}));
				}, 500);
			}
		};
	}]);