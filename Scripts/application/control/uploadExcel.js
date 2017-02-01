angular
	.module('app.control')
	.directive('uploadExcel', ['$timeout', 'utils', 'excel', function ($timeout, utils, excel) {
		return {
			restrict: 'AE',
			scope: {
				file: '='
			},
			link: function (scope, elem, attrs) {
				scope.file = scope.file || {};

				function handleFile(e) {
					var files = e.target.files,
						i, f;
					for (i = 0, f = files[i]; i != files.length; ++i) {
						var reader = new FileReader();
						$timeout(function () {
							scope.file.name = f.name;
						});
						reader.onload = onLoadFile;
						reader.readAsBinaryString(f);
					}
				}

				function onLoadFile(e) {
					var data = e.target.result,
						workbook = XLSX.read(data, { type: 'binary' }),

						/* DO SOMETHING WITH workbook HERE */
						datasource = excel.retrieveData(workbook.Sheets[workbook.SheetNames[0]]);

					$timeout(function () {
						scope.file.data = scope.file.data || [];
						scope.file.columns = excel.retrieveColumns(workbook.Sheets[workbook.SheetNames[0]]);
						_(datasource).each(function (item) {
							scope.file.data.push(_.extend({}, item, { id: utils.newGuid() }));
						});
					});
				}

				$(elem).change(handleFile);
			}
		};
	}]);