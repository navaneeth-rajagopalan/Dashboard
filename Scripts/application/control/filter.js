angular
	.module('app.control')
	.directive('filter', ['constant', 'utils', function (constant, utils) {
		return {
			restrict: 'AE',
			template: '<grid columns="columns" options="options"></grid>',
			scope: {
				datasource: '=',
				readOnly: '=?',
				fieldOptions: '=?',
				filterOptions: '=?'
			},
			link: function (scope, elem, attrs) {
				scope.options = {
					rowHeight: 25,
					enableSorting: false,
					enableColumnMenus: false,
					enableFiltering: false,
					data: scope.datasource,
					minRowsToShow: 5,
					headerTemplate: 'Scripts/application/control/filter-header.html'
				};
				scope.add = function () {
					if (!scope.editRow) {
						scope.newItem.startValidate = true;

						if (!scope.newItem.isValid()) {
							return;
						}
						scope.datasource.push(scope.newItem);
					}

					// reset header command bar
					clearNewItem();
					scope.editRow = false;
				};
				scope.delete = function (rule) {
					scope.datasource = _(scope.datasource).reject(function (item) {
						return rule.id === item.id;
					});
					scope.options.data = scope.datasource;
				};
				scope.edit = function (item) {
					scope.newItem = angular.copy(item);
					scope.editRow = true;
				};
				scope.cancel = function () {
					scope.editRow = false;
					clearNewItem();
				};
				scope.save = function () {
					var item = _(scope.options.data).findWhere({
						id: scope.newItem.id
					});
					_(item).extend(scope.newItem);
					clearNewItem();
				};

				function clearNewItem() {
					scope.editRow = false;
					scope.newItem = {
						id: utils.newGuid(),
						field: undefined,
						filter: undefined,
						value: undefined,

						startValidate: false,
						isValid: function () {
							if (!this.field && !this.filter && !this.value) {
								return false;
							}
							return !this.filterError() && !this.valueError();
						},
						filterError: function () {
							return !!this.startValidate && !!this.field && !this.filter;
						},
						valueError: function () {
							return !!this.startValidate && !!this.field && !this.value;
						}
					};
				};
				function setUpColumns() {
					scope.columns = [
						{ selected: true, width: '*', displayName: 'Field', field: 'field', options: scope.fieldOptions },
						{ selected: true, width: '*', displayName: 'Filter', field: 'filter', options: scope.filterOptions },
						{ selected: true, width: '*', displayName: 'Value', field: 'value' }
					];

					if (scope.readOnly !== true) {
						scope.columns.push({
							selected: true,
							width: 50,
							displayName: '',
							field: 'command',
							cellTemplate: '<a href="javascript:;" ng-click="grid.appScope.$parent.edit(row.entity)" class="remove-row"><span class="glyphicon glyphicon-pencil"></span></a><a href="javascript:;" ng-click="grid.appScope.$parent.delete(row.entity)" class="remove-row"><span class="glyphicon glyphicon-remove"></span></a>'
						});
					}
				}

				function setUpWatch() {
					if (scope.readOnly !== true) {
						var watchFieldoptions = scope.$watch('fieldOptions', function (value) {
							scope.columns[0].options = value;
							watchFieldoptions(); // clear watch handler
						}),
							watchFilterCollection = scope.$watch('filterOptions', function (value) {
								scope.columns[1].options = value;
								watchFilterCollection(); // clear watch handler
							});
					}
				}
				clearNewItem();
				setUpColumns();
				setUpWatch();
			}
		};
	}]);