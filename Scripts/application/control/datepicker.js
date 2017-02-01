angular
	.module('app.control')
	.directive('datepicker', ['$rootScope', 'utils', 'constant', function ($rootScope, utils, constant) {
		return {
			require: '?ngModel',
			restrict: 'AE',
			link: function (scope, elem, attrs, model) {
				var $elem = elem,
					$scope = scope,
					$model = model;
				var datepicker = $elem.datepicker({
						format: constant.dateFormat,
						onRender: function (date) {
							if (!attrs.minDate) {
								return '';
							}

							var fromDate = $scope[attrs.minDate];
							if (typeof fromDate === "string") {
								fromDate = utils.stringToDate(fromDate);
							}
							if (fromDate) {
								return fromDate.valueOf() > date.valueOf() ? 'disabled' : '';
							}
							return '';
						}
					})
					.on('changeDate', function (e) {
						$(this).datepicker('hide');
						$model.$setViewValue(e.date);

						if (!attrs.minDate) {
							$rootScope.$broadcast('dateChanged', e.date);
						}
					}).data('datepicker');

				if (!!attrs.minDate) {
					scope.$on('dateChanged', function (event, date) {
						datepicker.fill();
					});

					datepicker.fill();
				}
			}
		};
	}]);