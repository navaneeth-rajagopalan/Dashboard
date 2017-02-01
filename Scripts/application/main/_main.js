angular
	.module('app.main', [
		'main.controller'
	])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$compileProvider',
	function ($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
		var url = 'Scripts/application/main/view/';
		// Now set up the states
		$stateProvider
			.state('menu', {
				url: 'menu',
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
			.state('menu.dashboard', {
				url: "/dashboard",
				templateUrl: url + 'menu.html',
				controller: 'main.controller.menu'
			})
			.state('menu.policies', {
				url: "/policies",
				templateUrl: url + 'menu.html',
				controller: 'main.controller.menu'
			})
			.state('menu.security', {
				url: "/security",
				templateUrl: url + 'menu.html',
				controller: 'main.controller.menu'
			})
			.state('menu.revenue', {
				url: "/revenue",
				templateUrl: url + 'menu.html',
				controller: 'main.controller.menu'
			})
			.state('menu.operations', {
				url: "/operations",
				templateUrl: url + 'menu.html',
				controller: 'main.controller.menu'
			})
			.state('menu.disclosures', {
				url: "/disclosures",
				templateUrl: url + 'disclosures.html',
				controller: 'main.controller.menu'
			})
			.state('menu.helpdesk', {
				url: "/helpdesk",
				templateUrl: url + 'menu.html',
				controller: 'main.controller.menu'
			})
			.state('menu.knowledgeBase', {
				url: "/knowledge-base",
				templateUrl: url + 'menu.html',
				controller: 'main.controller.menu'
			});
	}]);