angular
	.module('app.helper')
	.service('utils', ['$state', '$rootScope', function ($state, $rootScope) {
		function dateToString(dateObject) {
			//("0" + (this.getMonth() + 1)).slice(-2)
			return ("0" + (dateObject.getMonth() + 1)).slice(-2) + "-" + ("0" +dateObject.getDate()).slice(-2) + '-' + dateObject.getFullYear();
			//return ( dateObject.getMonth() + 1) + "-" + dateObject.getDate() + '-' + dateObject.getFullYear();
		}
		function stringToDate(str) {
			if (!str) return undefined;
			if (typeof str === 'object') return str;
			var items = str.split('-').map(Number);
			return new Date(items[2], items[0] - 1, items[1]);
		}
		function newGuid() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
		}
		function getRandom(min, max) {
			min = min || 0;
			max = max || 9999;
			return Math.floor(Math.random() * (max - min + 1) + min);
		}
		// use to general test data
		function getRandomItem(arr) {
			return arr[getRandom(0, arr.length - 1)];
		}
		// get number of grid rows
		function getNumberOfRows() {
			return Math.floor(($('.content-wrapper').outerHeight(true) - 20
				- $('.footer-wrapper').outerHeight(true)
				- $('.ui-grid-header').outerHeight(true)
				- $('.top-menu-wrapper').outerHeight(true)
				- $('.sub-menu').outerHeight(true)) / 25);
		}
		function extendScopeProperties(scope) {
			scope.isEditMode = $state.current.name.indexOf('edit') > -1;
			scope.isCopyMode = $state.current.name.indexOf('copy') > -1;
			scope.isAddMode = $state.current.name.indexOf('add') > -1;
			scope.isInActive = function () {
				return scope.originalStatus === 'InActive';
			};
			scope.isInUse = function () {
				return scope.originalStatus === 'InUse';
			};
			scope.isActive = function () {
				return scope.originalStatus === 'Active';
			};
		}

		function sortByTimestamp(scope) {
			scope.filter = undefined;
			scope.cards.sort(function (first, second) {
				return first.timestamp.valueOf() - second.timestamp.valueOf();
			});
		}

		function formatCurrencyCell(grid, row, col, rowRenderIndex, colRenderIndex) {
			var classes = 'bold text-right ',
				value = Number(grid.getCellValue(row, col).replace('$ ', '').replace(',', ''));

			return classes + (Number(value) > 0 ? 'text-success' : 'text-danger');
		}

		function getHostName() {
			var hostname = '52.27.62.220', // location.hostname, // 52.27.62.220
				port = '8080'; // location.port
			return location.protocol + '//' + hostname + ':' + port;
		}

		function toCamelCase(str) {
			var newString = '', i,
				lastEditedIndex;

			for (i = 0; i < str.length; i++) {
				if (str[i] == ' ' || str[i] == '-' || str[i] == '_') {
					newString += str[i + 1].toUpperCase();
					lastEditedIndex = i + 1;
				}
				else if (lastEditedIndex !== i) {
					newString += str[i].toLowerCase();
				}
			}
			return newString;

		}
		function getMax(arr, key) {
			if (arr.length === 0) {
				return 0;
			}
			return _(arr).chain()
					.map(function (item) { return item[key] })
					.max(function (item) { return item })
					.value();
		}
		return {
			dateToString: dateToString,
			stringToDate: stringToDate,
			newGuid: newGuid,
			getRandom: getRandom,
			getRandomItem: getRandomItem,
			getNumberOfRows: getNumberOfRows,
			extendScopeProperties: extendScopeProperties,
			sortByTimestamp: sortByTimestamp,
			formatCurrencyCell: formatCurrencyCell,
			getHostName: getHostName,
			toCamelCase: toCamelCase,
			getMax: getMax
		};
	}]);