angular
	.module('app.dashboard', [
		'dashboard.controller'
	])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$compileProvider',
	function ($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
		var url = 'Scripts/application/dashboard/view/';
		// Now set up the states
		$stateProvider
			.state('dashboard', {
				url: 'dashboard',
				abtract: true,
				views: {
					'top-menu': {
						templateUrl: 'Scripts/application/main/view/top-menu.html',
						controller: 'main.controller.topmenu'
					},
					'cards': {},
					'main': {
						template: '<div ui-view></div>',
					},
					'footer': {},
					'sub-menu': {
						templateUrl: url + 'sub-menu.html',
						controller: 'main.controller.tilesmenu'
					}
				}
			})
			.state('dashboard.dailyBoard', {
				url: "/daily-board",
				templateUrl: url + 'daily-board.html',
				controller: 'dashboard.controller.dailyBoard'
			})
			.state('dashboard.operationalBoard', {
				url: "/operational-board",
				templateUrl: url + 'operational-board.html'
			})
			.state('dashboard.monthEndBoard', {
				url: "/month-end-board",
				templateUrl: url + 'month-end-board.html'
			});
	}]);