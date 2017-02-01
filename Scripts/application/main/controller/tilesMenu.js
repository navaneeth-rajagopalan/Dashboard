angular
	.module('main.controller')
	.controller('main.controller.tilesmenu', ['$scope', function ($scope) {
		$scope.menuItems = [];

		newMenuItem('bg-darkCyan', 'menu.dashboard', 'revicon-dashboard', 'Dashboard');
		newMenuItem('bg-darkCyan', 'menu.policies', 'revicon-policies', 'Policies');
		newMenuItem('bg-darkCyan', 'menu.security', 'revicon-security', 'Security');
		newMenuItem('bg-darkCyan', 'menu.revenue', 'revicon-revenue', 'Revenue Area');
		newMenuItem('bg-darkCyan', 'menu.operations', 'revicon-operations', 'Operations');
		newMenuItem('bg-darkCyan', 'menu.disclosures', 'revicon-disclosures', 'Disclosures');
		newMenuItem('bg-darkOrange', 'menu', 'revicon-helpdesk', 'Helpdesk');
		newMenuItem('bg-brown', 'menu', 'revicon-knowledgebase', 'Knowledge Base');

		function newMenuItem(bgColor, state, icon, text) {
			$scope.menuItems.push({
				bgColor: bgColor,
				state: state,
				icon: icon,
				text: text
			});
		}
		
	}]);