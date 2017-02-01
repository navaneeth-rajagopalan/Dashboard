angular
	.module('app.control')
	.directive('grid', [function () {
		return {
			retricts: 'E',
			scope: {
				columns: '=',
				options: '='
			},
			templateUrl: 'Scripts/application/control/grid.html',
			link: function (scope, element, attrs) {
				scope.options = _.extend({
					//data: scope.data,
					enableSorting: true,
					rowHeight: 25,
					enableFiltering: false,
					enableColumnMenus: false,
					columnDefs: scope.columns
				}, scope.options);
			}
		};
	}]);