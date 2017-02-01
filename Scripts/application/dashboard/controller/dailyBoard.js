angular
	.module('dashboard.controller')
	.controller('dashboard.controller.dailyBoard', ['$rootScope', '$scope', function ($rootScope, $scope) {

		var screenWidth = window.screen.width,
			screenheight = window.screen.height,	
			feasibleHeight = (screenheight - 60) / 3.1;

		FusionCharts.ready(function () {
			var wealthChart = new FusionCharts({
				type: 'pyramid',
				renderAt: 'chart-container',
				id: 'wealth-pyramid-chart',
				width: screenWidth / 4.2,
				height: feasibleHeight - 32,
				dataFormat: 'json',
				dataSource: {
					"chart": {
						"theme": "fint",
						"captionOnTop": "1",
						"captionPadding": "25",
						"alignCaptionWithCanvas": "1",
						"subCaptionFontSize": "12",
						"borderAlpha": "20",
						"is2D": "0",
						"bgColor": "#ffffff",
						/*"showValues": "1",*/
						/*"numberPrefix": "$",
                         "numberSuffix": "M",*/
						"plotTooltext": "$label "
						/*"showPercentValues": "1",*/
						/*"chartLeftMargin": "40"*/
					},
					"data": [
                        {
                        	"label": "APAC $ 33,87,563.60",
                        	"value": "98.7"
                        },
                        {
                        	"label": "EMEA $ 50,81,345.40",
                        	"value": "101.8"
                        },
                        {
                        	"label": "Americas $ 84,68,909.00",
                        	"value": "59.3"
                        }
					]
				}
			})

                .render();
		});


		FusionCharts.ready(function () {
			var ageGroupChart = new FusionCharts({
				type: 'pie2d',
				renderAt: 'chart-baseline',
				width: screenWidth / 4.2,
				height: feasibleHeight,
				dataFormat: 'json',
				dataSource: {
					"chart": {
						"caption": "Revenue By Business Line",
						"numberPrefix": "$",
						"startingAngle": "20",
						/*"showPercentValues": "1",*/
						/*"showPercentInTooltip": "0",*/
						"showLabels": "0",
						"enableSmartLabels": "0",
						"enableMultiSlicing": "0",
						/*"showLegend": "1",*/
						"decimals": "1",
						//Theme
						"theme": "fint"
					},
					"data": [
                        {
                        	"label": "Hardware $1,25,00,900.00",
                        	"value": "1250400"
                        },
                        {
                        	"label": "Subscription $4,50,000.00",
                        	"value": "1463300"
                        },
                        {
                        	"label": "Software $2,76,000.00",
                        	"value": "1050700"
                        },
                        {
                        	"label": "Maintenance $28,10,918.00",
                        	"value": "491000"
                        },
                        {
                        	"label": "Services $9,00,000.00",
                        	"value": "91000"
                        }
					]
				}
			}).render();
		});


		var topFiveAmerica = new FusionCharts({
			type: 'bar2d',
			renderAt: 'bar-chart-1',
			width: screenWidth / 3.1,
			height: feasibleHeight,
			dataFormat: 'json',
			dataSource: {
				"chart": {
					"caption": "Top 5 America Revenue",
					/*"subCaption": "Last month",*/
					"yAxisName": "Business Line",
					"numberPrefix": "$",
					"paletteColors": "#0075c2",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"showCanvasBorder": "0",
					"usePlotGradientColor": "0",
					"plotBorderAlpha": "10",
					"placeValuesInside": "1",
					"valueFontColor": "#ffffff",
					"showAxisLines": "1",
					"axisLineAlpha": "25",
					"divLineAlpha": "10",
					"alignCaptionWithCanvas": "0",
					"showAlternateVGridColor": "0",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5"
				},
				"data": [
                    {
                    	"label": " SERVICE NOW",
                    	"value": "1500000"
                    },
                    {
                    	"label": "ORACLE",
                    	"value": "900000"
                    },
                    {
                    	"label": "FORCE",
                    	"value": "650000"
                    },
                    {
                    	"label": "APPLE",
                    	"value": "450000"
                    },
                    {
                    	"label": "IBM",
                    	"value": "276000"
                    }
				]
			}
		})
            .render();

		var topFiveEMEA = new FusionCharts({
			type: 'bar2d',
			renderAt: 'bar-chart-2',
			width: screenWidth / 3.1,
			height: feasibleHeight,
			dataFormat: 'json',
			dataSource: {
				"chart": {
					"caption": "Top 5 EMEA Revenue",
					/*"subCaption": "Last month",*/
					"yAxisName": "Business Line",
					"numberPrefix": "$",
					"paletteColors": "#33cc33",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"showCanvasBorder": "0",
					"usePlotGradientColor": "0",
					"plotBorderAlpha": "10",
					"placeValuesInside": "1",
					"valueFontColor": "#ffffff",
					"showAxisLines": "1",
					"axisLineAlpha": "25",
					"divLineAlpha": "10",
					"alignCaptionWithCanvas": "0",
					"showAlternateVGridColor": "0",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5"
				},

				"data": [
                    {
                    	"label": "Cummins",
                    	"value": "1200000"
                    },
                    {
                    	"label": "Uniliver",
                    	"value": "750000"
                    },
                    {
                    	"label": "Zerto",
                    	"value": "626000"
                    },
                    {
                    	"label": "iZettle",
                    	"value": "422000"
                    },
                    {
                    	"label": "CATA WIKI",
                    	"value": "326000"
                    }
				]
			}
		})
            .render();
		var topFiveAPAC = new FusionCharts({
			type: 'bar2d',
			renderAt: 'bar-chart-3',
			width: screenWidth / 3.1,
			height: feasibleHeight,
			dataFormat: 'json',
			dataSource: {
				"chart": {
					"caption": "Top 5 APAC Revenue",
					/*"subCaption": "Last month",*/
					"yAxisName": "Business Line",
					"numberPrefix": "$",
					"paletteColors": "#80b3ff",
					"bgColor": "#ffffff",
					"showBorder": "0",
					"showCanvasBorder": "0",
					"usePlotGradientColor": "0",
					"plotBorderAlpha": "10",
					"placeValuesInside": "1",
					"valueFontColor": "#ffffff",
					"showAxisLines": "1",
					"axisLineAlpha": "25",
					"divLineAlpha": "10",
					"alignCaptionWithCanvas": "0",
					"showAlternateVGridColor": "0",
					"captionFontSize": "14",
					"subcaptionFontSize": "14",
					"subcaptionFontBold": "0",
					"toolTipColor": "#ffffff",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000000",
					"toolTipBgAlpha": "80",
					"toolTipBorderRadius": "2",
					"toolTipPadding": "5"
				},

				"data": [
                    {
                    	"label": "Telstra",
                    	"value": "500000"
                    },
                    {
                    	"label": "China Mobile",
                    	"value": "460000"
                    },
                    {
                    	"label": "Sinopec",
                    	"value": "350000"
                    },
                    {
                    	"label": "Mavenlink",
                    	"value": "270000"
                    },
                    {
                    	"label": "Zoho",
                    	"value": "160000"
                    }
				]
			}
		})
            .render();
	}]);