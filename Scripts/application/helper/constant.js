angular
	.module('app.helper')
	.constant('constant', {
		// settings
		generateData: 20,
		// 'workBench.search.condition' 'labelMapper.edit', 'vc.add', 'identify.add', 'pobDefinition.add', 'ssp.add' 'transactionUpload.add'
		openningState: 'menu.dashboard',
		dateFormat: 'mm-dd-yyyy',
		// data for dropdownlist in many modules
		dateStatus: ['Invoice Date', 'Document Sign Date', 'Book Date', 'Delivery Date'],
		valueTypes: ['Amount', 'Percentage'],
		allStatus: ['Active', 'InUse', 'InActive'],
		yesNos: ['Yes', 'No'],
		controlTypes: ['Text', 'Date', 'Number'],
		filterFields: ['Customer type', 'Region'],
		filterFilters: ['Equals To', 'No Equals To', 'Greater Than', 'Greater Than or Equal To', 'Less Than', 'Less Than or Equal To'],
		userBook: ['606', '605', 'Forecasting'],
		userCompany: ['Americas', 'EMEA', 'Pacific'],
		account1Data: [606, 607, 608],
		account2Data: [609, 610, 611],
		account3Data: [612, 613, 614],
		account4Data: [615, 616, 617],
		account5Data: [618, 619, 620],
		account6Data: [621, 622, 623],
		account7Data: [624, 625, 626],
		account8Data: [627, 628, 629]
	});