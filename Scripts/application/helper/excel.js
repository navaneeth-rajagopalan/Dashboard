angular
	.module('app.helper')
	.service('excel', ['$state', function ($state) {
		function Workbook() {
			if (!(this instanceof Workbook)) return new Workbook();
			this.SheetNames = [];
			this.Sheets = {};
		}

		function formatExcelData(header, datasource) {
			var data = [];
			// insert header first
			data.push(header);
			// insert data
			_(datasource).each(function (item) {
				var _item = angular.copy(item);
				delete _item['$$hashKey'];
				delete _item['id'];
				data.push(_(_item).map(function (value) { return value; }));
			});
			// return format data
			return data
		}

		function createWorkbook(filename, worksheetName, header, datasource) {
			var data = formatExcelData(header, datasource),
				ws = sheet_from_array_of_arrays(data),
				ws_name = worksheetName,
				wb = new Workbook(),
				wbout;

			wb.SheetNames.push(ws_name);
			wb.Sheets[ws_name] = ws;
			wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });

			/* the saveAs call downloads a file on the local machine */
			saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), filename);
		}

		function datenum(v, date1904) {
			if (date1904) v += 1462;
			var epoch = Date.parse(v);
			return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
		}

		function sheet_from_array_of_arrays(data, opts) {
			var ws = {};
			var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };
			for (var R = 0; R != data.length; ++R) {
				for (var C = 0; C != data[R].length; ++C) {
					if (range.s.r > R) range.s.r = R;
					if (range.s.c > C) range.s.c = C;
					if (range.e.r < R) range.e.r = R;
					if (range.e.c < C) range.e.c = C;
					var cell = { v: data[R][C] };
					if (cell.v == null) continue;
					var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });

					if (typeof cell.v === 'number') cell.t = 'n';
					else if (typeof cell.v === 'boolean') cell.t = 'b';
					else if (cell.v instanceof Date) {
						cell.t = 'n'; cell.z = XLSX.SSF._table[14];
						cell.v = datenum(cell.v);
					}
					else cell.t = 's';

					ws[cell_ref] = cell;
				}
			}
			if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
			return ws;
		}

		function s2ab(s) {
			var buf = new ArrayBuffer(s.length),
				view = new Uint8Array(buf);
			for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
			return buf;
		}

		function build2(data) {
			/* the range object is used to keep track of the range of the sheet */
			var range = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };

			/* Iterate through each element in the structure */
			for (var R = 0; R != data.length; ++R) {
				if (range.e.r < R) range.e.r = R;
				for (var C = 0; C != data[R].length; ++C) {
					if (range.e.c < C) range.e.c = C;

					/* create cell object: .v is the actual data */
					var cell = { v: data[R][C] };
					if (cell.v == null) continue;

					/* create the correct cell reference */
					var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });

					/* determine the cell type */
					if (typeof cell.v === 'number') cell.t = 'n';
					else if (typeof cell.v === 'boolean') cell.t = 'b';
					else cell.t = 's';

					/* add to structure */
					ws[cell_ref] = cell;
				}
			}
			ws['!ref'] = XLSX.utils.encode_range(range);

		}

		function writeFile(workbook) {
			/* bookType can be 'xlsx' or 'xlsm' or 'xlsb' */
			var wopts = { bookType: 'xlsx', bookSST: false, type: 'binary' };

			var wbout = XLSX.write(workbook, wopts);

			function s2ab(s) {
				var buf = new ArrayBuffer(s.length);
				var view = new Uint8Array(buf);
				for (var i = 0; i != s.length; ++i) {
					view[i] = s.charCodeAt(i) & 0xFF;
				}
				return buf;
			}

			/* the saveAs call downloads a file on the local machine */
			saveAs(new Blob([s2ab(wbout)], { type: "" }), "test.xlsx")
		}

		function retrieveData(data) {
			var range = data['!ref'].split(':'),
				character = 'ABCDEFGHIJKLMNOP'.split(''),
				rows = parseInt(range[1].substring(1)),
				cols = range[1].replace(/\d+/g, '').charCodeAt(0) - 65, // 65: A
				i, j, item,
				field = {},
				result = [];

			for (i = 2; i <= rows; i++) {
				item = {};
				for (j = 0; j <= cols; j++) {
					item[data[character[j] + '1'].w.toLowerCase().replace(/ /g, '')] = data[character[j] + i].w;
				}
				result.push(item);
			}

			return result;
		}

		function retrieveColumns(data) {
			var range = data['!ref'].split(':'),
				cols = range[1].replace(/\d+/g, '').charCodeAt(0) - 65,
				columns = [],
				character = 'ABCDEFGHIJKLMNOP'.split(''),
				item = {}, j;

			for (j = 0; j <= cols; j++) {
				columns.push(data[character[j] + '1'].w);
			}

			return columns;
		}

		return {
			writeFile: writeFile,
			createWorkbook: createWorkbook,
			retrieveData: retrieveData,
			retrieveColumns: retrieveColumns
		};
	}]);