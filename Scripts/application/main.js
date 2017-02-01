angular
	.module('app', [
		'ui',
		'ui.router',
		'app.main',
		'app.dashboard',
		//'app.control',
		'app.helper'
	])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$compileProvider', '$httpProvider',
	function ($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider, $httpProvider) {
		$locationProvider.html5Mode(false);
		// enable debug information
		$compileProvider.debugInfoEnabled(true);


	}])
	.run(['$rootScope', '$state', 'constant', '$timeout',
		function ($rootScope, $state, constant, $timeout) {
			$rootScope.$state = $state;
			$state.go(constant.openningState);
			$rootScope.$on("stateChangeError", function (event, toState, toParams, fromState, fromParams) {
				console.log(arguments);
			});

			$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
				$rootScope.location = toState.url;
				if (typeof event.targetScope.initialize === 'function') {

				}
				//// update layout
				setUpLayout();
			});

			$rootScope.moduleName = function () {
				return $state.current.name.split('.')[0];
			};
			$rootScope.setTitle = function () {
				switch ($state.current.name) {
					case 'vc.add':
					case 'vc.edit':
					case 'vc.view':
					case 'vc.copy':
						return 'Variable Consideration';
					case 'vc.rules':
						return 'Variable Consideration Rules';
					case 'identify.add':
					case 'identify.edit':
					case 'identify.view':
					case 'identify.copy':
						return 'Identify Contract';
					case 'pobDefinition.add':
					case 'pobDefinition.edit':
					case 'pobDefinition.view':
					case 'pobDefinition.copy':
						return 'Performance Obligation';
					case 'pobDefinition.rules':
						return 'Perfromace Obligation Rules';
					case 'labelMapper.edit':
						return 'Label Mapper';
					case 'ssp.add':
					case 'ssp.edit':
					case 'ssp.copy':
					case 'ssp.view':
						return 'Standalone Selling Price';
					case 'sspRules.add':
					case 'sspRules.edit':
					case 'sspRules.copy':
						return 'SSP Rules';
					case 'workBench.search.condition':
						return 'Revenue Bench Search';
					case 'workBench.search.searchResults':
					case 'workBench.search.arrangement':
						return 'Search Results ';
					case 'bizEvents.add':
					case 'bizEvents.edit':
					case 'bizEvents.view':
					case 'bizEvents.copy':
						return 'Business Events';
					case 'transactionUpload.add':
					case 'transactionUpload.edit':
					case 'transactionUpload.copy':
						return 'Transaction Upload';
					default:
						return '';
				}
			};

			function setUpLayout() {
				$timeout(function () {
					// set height
					var $windowsHeight = $(window).height() - 38;
					if ($rootScope.$state.current.name.indexOf('menu') > -1
						|| $rootScope.$state.current.name.indexOf('dashboard') > -1) {
						$('.content-wrapper').height($(window).height());
					} else {
						$('.content-wrapper').height($windowsHeight);
					}

					if ($('.work-bench-wrapper').length > 0 && $('.work-bench-wrapper').is(':visible')) {
						$('.work-bench-wrapper').height($windowsHeight - 32);
						$('.main-content-wrapper > .ng-scope').height('100%');
					} 
				}, 500);
			}

			setUpLayout();
		}]).filter('logData', function () {
			return function (value) {
				console.log(value);
				return '';
			};
		});