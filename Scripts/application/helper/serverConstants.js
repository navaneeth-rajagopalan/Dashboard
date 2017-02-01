angular.module('app.helper').constant(
    'serverConstants',
    {
    	state_insert: 1,
    	state_update: 2,
    	state_delete: 3,
    	state_query: 4,

    	// book
    	book_primary: 1,
    	book_allocation: 2,
    	book_forecasting: 4,
    	book_cost: 8,
    	book_posting: 16,
    	book_simulation: 32,

      // Cost
      cost_primary : 1,
      cost_capitalization : 2,
      cost_level : 4,

      // Events
      event_process_type : 1,

      // label mapper
      label_ic : 1,
      label_po : 2,
      label_vc : 4,
      label_ssp : 8,
      label_costType : 16,
      label_cost : 32,
      label_event : 64,
      label_bundle : 128,
      label_approvals : 256,
      label_holds : 512,

      trueFalseList : [ true, false ],
      formatList : [ '', 'Text', 'Amount', 'Date', 'Number' ],
      percentAmountList : [ 'Percentage', 'Amount' ],
      vc_type : 1,
      yesNoList : [ 'Yes', 'No' ],
      levelList : [ 'Net', 'Gross' ],
      enableDisableList : [ 'Enabled', 'Disabled' ],
      statusList : [ 'InActive', 'Active', 'InUse' ],
      typeList : [ 'Revenue', 'Hold', 'Cost', 'VC' ],
      primarySecondaryList : [ 'Primary', 'Secondary' ],
      cummulativeIncrementalList : [ 'Incremental', 'Cumulative' ],
      getOperatorFromDB : [ 'Equals To', 'No Equals To', 'Greater Than', 'Greater than or Equal To', 'Less Than',
          'Less than or Equal To' ],
      getOperatorToDB : [ '=', '!=', '>', '>=', '<', '<=' ],

    	//po - revenue tretment constants
    	revMethods: ['Daily', 'Partial Monthly', 'Fixed Monthly'],
    	revTransactions: ['Contract', 'Sales Order', 'Billing'],
    	revTimings: ['Ratable', 'Condense', 'Slide', 'Immediate', 'Contract Ratable'],
    	tiggerTypes: ['Lead Line', 'Any Line', 'All Lines'],
    	triggerMethods: ['True Up', 'StandAlone'],

    	//po- revenue release constants
    	releaseBusinessEvents: ['PGI', 'Cash', 'Acceptance'],
    	expireOns: ['Invoice Date', 'Document Sign Date', 'Book Date', 'Delivery Date'],

    	//po-cost
    	holdsExpireOns: ['Invoice Date', 'Acceptance Date', 'Book Date'],
    	costTypes: ['Comission', 'Standard Cost'],
    	treatmentTypes: ['Immediate', 'Follow Revenue'],


    });