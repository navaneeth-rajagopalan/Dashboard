angular
	.module('main.controller')
	.controller('main.controller.menu', ['$scope', '$state', function ($scope, $state) {
		var metros = [],
			disclosures = [];

		$scope.showMetros = function () {
			return _(metros).filter(function (metro) {
				return metro.menu === $state.current.name.split('.')[1];
			});
		};

		$scope.showDisclosures = function () {
			var result = [], i = 0, max = 4, count = 0;

			while (count < disclosures.length) {
				var resultItems = [];
				for (i = 0; i < max; i++) {
					resultItems.push(disclosures[count]);
					count++;
				}
				result.push(resultItems);
			}

			return result;
		};

		function setupMetros() {
			newMetro('dashboard', 'dashboard.dailyBoard', 'Daily Board', 'revicon-dashboard-dailyboard');  
			newMetro('dashboard', 'dashboard.operationalBoard', 'Operational Board', 'revicon-dashboard-operational');
			newMetro('dashboard', 'dashboard.monthEndBoard', 'Month End Board', 'revicon-dashboard-monthend');

			newMetro('policies', 'identify.gateway', 'Identify Contracts', 'revicon-policies-contracts');
			newMetro('policies', 'pobDefinition.gateway', 'Performance Obligation', 'revicon-policies-perfobligation');
			newMetro('policies', 'vc.gateway', 'Variable Consideration');
			newMetro('policies', 'ssp.gateway', 'SSP');
			newMetro('policies', 'book.view', 'Books', 'revicon-policies-book');
			newMetro('policies', 'menu.policy', 'Policies', 'revicon-policies-policies');
			newMetro('policies', 'menu.policy', 'Profiles');
			newMetro('policies', 'cost.view', 'Cost Management');
			newMetro('policies', 'menu.policy', 'Revenue Lookups');
			newMetro('policies', 'menu.policy', 'Accounting Structure');
			newMetro('policies', 'menu.policy', 'Accounting Rules');
			newMetro('policies', 'menu.policy', 'Periods');
			newMetro('policies', 'labelMapper.edit', 'Label Mapper');
			newMetro('policies', 'menu.policy', 'Currencies');
			newMetro('policies', 'menu.policy', 'Customers');
			newMetro('policies', 'menu.policy', 'Items');
			newMetro('policies', 'menu.policy', 'Exchange Rates');
			newMetro('policies', 'menu.policy', 'Bundles');
			newMetro('policies', 'menu.policy', 'GL Mapping');
			newMetro('policies', 'bizEvents.gateway', 'Business Events');
			newMetro('policies', 'menu.policy', 'Contract Modification Rules');
			newMetro('policies', 'menu.policy', 'Holds');
			newMetro('policies', 'menu.policy', 'Approvals');

			newMetro('security', 'menu.security', 'Role Management', 'revicon-security-role');
			newMetro('security', 'userManagement.view', 'User Management', 'revicon-security-user');
			newMetro('security', 'menu.security', 'Password Reset', 'revicon-security-password');

			newMetro('revenue', 'workBench.search.condition', 'Revenue Bench', 'revicon-revenue-bench');
			newMetro('revenue', 'menu.revenue', 'Journals', 'revicon-revenue-journals');
			newMetro('revenue', 'menu.revenue', 'LTST');
			newMetro('revenue', 'menu.revenue', 'Forecasting', 'revicon-revenue-forecast');
			newMetro('revenue', 'menu.revenue', 'Contract Management');
			newMetro('revenue', 'menu.revenue', 'Approvals');
			newMetro('revenue', 'menu.revenue', 'Simulator');
			newMetro('revenue', 'transactionUpload.gateway', 'Transactions Upload');
			newMetro('revenue', 'menu.revenue', 'Events Upload');
			newMetro('revenue', 'menu.revenue', 'Mass Update');
			newMetro('revenue', 'menu.revenue', 'Transfer Accounting');

			newMetro('operations', 'menu.operations', 'SSP Upload');
			newMetro('operations', 'pobDefinition.rules', 'POB Rules');
			newMetro('operations', 'vc.rules', 'VC Rules');
			newMetro('operations', 'menu.operations', 'Hierarchies');
			newMetro('operations', 'menu.operations', 'Forecasting Rules');
			newMetro('operations', 'menu.operations', 'Hold Rules');
			newMetro('operations', 'menu.operations', 'Period Close');
			newMetro('operations', 'menu.operations', 'Approval Rules');
			newMetro('operations', 'menu.operations', 'VC Analyzer');
			newMetro('operations', 'menu.operations', 'SSP Analyzer');
		}

		function newMetro(menu, state, text, icon) {
			metros.push({
				state: state,
				text: text,
				icon: icon,
				menu: menu
			});
		}

		function setupDisclosure() {
			newDisclosure('REVENUE MANAGEMENT', [
				{ state: 'reports.view', text: 'Revenue Details' },
				{ state: 'reports.view', text: 'Revenue Comparison' },
				{ state: 'reports.view', text: 'Revenue Waterfall 605' },
				{ state: 'reports.view', text: 'Revenue Waterfall 605' },
				{ state: 'reports.view', text: 'Revenue Accounting' },
				{ state: 'reports.view', text: 'Revenue on Hold' }
			]);
			newDisclosure('ALLOCATION MANAGEMENT', [
				{ state: 'reports.view', text: 'Allocation Details' },
				{ state: 'reports.view', text: 'Allocation Comparison' },
				{ state: 'reports.view', text: 'Allocation waterfall 605' },
				{ state: 'reports.view', text: 'Allocation waterfall 605' },
				{ state: 'reports.view', text: 'Allocation Accounting' },
				{ state: 'reports.view', text: 'Allocation on Hold' },
				{ state: 'reports.view', text: 'Allocation Forward' },
				{ state: 'reports.view', text: 'Allocation Asset Details' },
				{ state: 'reports.view', text: 'Allocation Liability Details' }
			]);
			newDisclosure('EXCEPTION MANAGEMENT', [
				{ state: 'reports.view', text: 'Revenue Account Exceptions' },
				{ state: 'reports.view', text: 'Transaction Exceptions' },
				{ state: 'reports.view', text: 'Event Exceptions' },
				{ state: 'reports.view', text: 'SSP Exceptions' },
				{ state: 'reports.view', text: 'Transfer Accounting' }
			]);
			newDisclosure('RECON MANAGEMENT', [
				{ state: 'reports.view', text: 'Contract Details' },
				{ state: 'reports.view', text: 'Order Details' },
				{ state: 'reports.view', text: 'Billing Details' },
				{ state: 'reports.view', text: 'Event Details' },
				{ state: 'reports.view', text: 'Accounting Details' }
			]);
			newDisclosure('LIABILITY MANAGEMENT', [
				{ state: 'reports.view', text: 'Liability Details' },
				{ state: 'reports.view', text: 'Liability Comparison' },
				{ state: 'reports.view', text: 'Liability Waterfall' },
				{ state: 'reports.view', text: 'Revenue Forward' }
			]);
			newDisclosure('SSP MANAGEMENT', [
				{ state: 'reports.view', text: 'SSP By Strat' },
				{ state: 'reports.view', text: 'SSP Analysis' }
			]);
			newDisclosure('APPLICATION MANAGEMENT', [
				{ state: 'reports.view', text: 'User and Role Access' },
				{ state: 'reports.view', text: 'User and Role Details' },
				{ state: 'reports.view', text: 'Transaction Modification' },
				{ state: 'reports.view', text: 'Transaction Move' },
				{ state: 'reports.view', text: 'Contract Modifications' },
				{ state: 'reports.view', text: 'SSP Modifications' }
			]);
			newDisclosure('606 DISCLOSURES', [
				{ state: 'reports.view', text: 'Disaggregation of revenue' },
				{ state: 'reports.view', text: 'Remaining Performance Obligations' },
				{ state: 'reports.view', text: 'Information about Contract balances' }
			]);
			newDisclosure('COST MANAGEMENT', [
				{ state: 'reports.view', text: 'Cost Details' },
				{ state: 'reports.view', text: 'Cost Comparison' },
				{ state: 'reports.view', text: 'Cost Waterfall' },
				{ state: 'reports.view', text: 'Cost Accounting' }
			]);
			newDisclosure('VC MANAGEMENT', [
				{ state: 'reports.view', text: 'VC Details' },
				{ state: 'reports.view', text: 'VC Accounting' },
				{ state: 'reports.view', text: 'VC Accrual Details' },
				{ state: 'reports.view', text: 'VC Clearing Details' }
			]);
		}

		function newDisclosure(title, items) {
			disclosures.push({
				title: title,
				items: items
			});
		}

		setupMetros();
		setupDisclosure();
	}]);