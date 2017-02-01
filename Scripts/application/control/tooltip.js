angular
	.module('app.control')
	.directive('tooltip', [function () {
		return {
			restrict: 'A',
			link: function (scope, elem, attrs) {
				elem.hover(function () {
					elem.attr('data-original-title', attrs.title).tooltip({
						delay: { "show": 500, "hide": 100 },
						template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner text-danger"></div></div>'
					}).tooltip('show');
				});
			}
		};
	}])
	.directive('errorTooltip', [function () {
		return {
			restrict: 'A',
			link: function (scope, elem, attrs) {
				elem.hover(function () {
					elem.attr('data-original-title', attrs.title).tooltip({
						delay: { "show": 500, "hide": 100 },
						template: '<div class="tooltip error" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner text-danger"></div></div>'
					}).tooltip('show');
				});
			}
		};
	}]);