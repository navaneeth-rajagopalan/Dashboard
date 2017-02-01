angular
	.module('main.controller')
	.controller('main.controller.topmenu', ['$scope', function ($scope) {
		$scope.menuItems = [];

		newMenuItem('bg-red', 'menu.dashboard', 'mif-display', 'Dashboard');
		newMenuItem('bg-cyan', 'menu.policies', 'mif-organization', 'Policies');
		newMenuItem('bg-orange', 'menu.security', 'mif-security', 'Security');
		newMenuItem('bg-crimson', 'menu.revenue', 'mif-money', 'Revenue Area');
		newMenuItem('bg-cobalt', 'menu.operation', 'mif-steps', 'Operations');
		newMenuItem('bg-green', 'menu.disclosures', 'mif-openid', 'Disclosures');
		newMenuItem('bg-darkPink', '', 'mif-bubbles', 'Helpdesk');
		newMenuItem('bg-darkCyan', '', 'mif-books', 'Knowledge Base');

		function newMenuItem(bgColor, state, icon, text) {
			$scope.menuItems.push({
				bgColor: bgColor,
				state: state,
				icon: icon,
				text: text
			});
		}
	}]);