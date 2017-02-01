angular.module("dashboard.controller", ["ng-fusioncharts"])
    .controller('leftSection', function($scope){
        $scope.dataCollection= {
            "values":[
            {
            "month":"JAN",
            "revenue":"$123",
            "defRevenu":"$234"
            },
            {
            "month":"FEB",
            "revenue":"$123",
            "defRevenu":"$234"
            },
            {
            "month":"MAR",
            "revenue":"$123",
            "defRevenu":"$234"
            }
        ]};        
        $scope.myDataSource ={
        "chart": {                
        "lineColor": "#008000",  
        "canvasBgColor": "#ddecf1",
        "paletteThemeColor" :"#ddecf1",
        "bgColor ":"#ddecf1",        
        "showBorder": "0",
        "showToolTip": "0",
        "showValues" :"0",
        "lineAlpha": "10",
        "manageResize": "1",
        "plotSpacePercent": "80",
        "chartLeftMargin": "0",
        "chartRightMargin ": "0",
        "chartTopMargin ": "0",
        "chartBottomMargin": "0"

        },        
            "dataset": [
                    {
                    "data":[{
                    "value": "38.42"
                },
                {
                    "value": "41.43"
                },
                {
                    "value": "22.78"
                }] 
                   }]  
        };
        $scope.dataSource ={
        "chart": {        
        "showBorder": "0",
        "canvasBorderThickness": "0",
        "bgColor": "#ddecf1",
        "plotFillColor": "#0075c2",
        "highColor": "#1aaf5d",
        "lowColor": "#8e0000",
        "showHoverEffect": "1"
    },
    "dataset": [
        {
            "data": [
                {
                    "value": "783000"
                },
                {
                    "value": "601000"
                },
                {
                    "value": "515000"
                },
                {
                    "value": "315900"
                },
                {
                    "value": "388000"
                }]
            }]
        }   
    })
    .controller('doughnutController', function($scope){
        var data = 
            {
                'region':
                [
                    {
                        "label": "Americas",
                        "value": "8468909"
                    },
                    {
                        "label": "EMEA",
                        "value": "5081345"
                    },
                    {
                        "label": "APAC",
                        "value": "3387563"
                    }
                ],
                'businessFamily':
                [
                    {
                        "label": "Family1",
                        "value": "125000"
                    },
                    {
                        "label": "Family2",
                        "value": "250000"
                    },
                    {
                        "label": "Family3",
                        "value": "75000"
                    },
                    {
                        "label": "Family4",
                        "value": "500000"
                    }
                ],
                'top5Customers':
                [
                    {
                        "label": "SERVICE NOW",
                        "value": "1500000"
                    },
                    {
                        "label": "Cummins",
                        "value": "1200000"
                    },
                    {
                        "label": "ORACLE",
                        "value": "900000"
                    },
                    {
                        "label": "Uniliver",
                        "value": "750000"
                    },
                    {
                        "label": "FORCE",
                        "value": "650000"
                    }
                ],
                'businessLine': 
                [
                    {
                        "label": "Hardware",
                        "value": "12500900"
                    },
                    {
                        "label": "Subscription",
                        "value": "450000"
                    },
                    {
                        "label": "Software",
                        "value": "276000"
                    },
                    {
                        "label": "Maintenance",
                        "value": "2810918"
                    },
                    {
                        "label": "Services",
                        "value": "900000"
                    }
                ]                
            };
        $scope.myDataSource = {
            "chart": 
            {
                "caption": "Revenue By Region",      
                "numberPrefix": "$",
                "paletteColors": "#00334d,#0077b3,#1ac6ff,#f45b00,#8e0000",
                "bgColor": "rgb(221,236,241)",
                "showBorder": "0",
                "use3DLighting": "0",
                "showShadow": "0",
                "enableSmartLabels": "0",
                "startingAngle": "270",
                "showLabels": "0",
                "showPercentValues": "1",
                "showLegend": "1",
                "legendShadow": "0",
                "legendBorderAlpha": "0",
                "defaultCenterLabel": "",
                "centerLabel": 'Series "Amount" point "$label" value: $value',
                "centerLabelBold": "1",
                "slicingDistance" :"5",
                "showTooltip": "0",
                "decimals": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "useDataPlotColorForLabels": "1",       
                " borderThickness  ":"41"
            }
        };
        $scope.myDataSource.data = data['region'];
        
        $scope.generateChart = function(type){
            console.log("clicked "+type)
            $scope.myDataSource.data = data[type]; 
            switch (type) {
                case 'region':
                    $scope.myDataSource.chart.caption = 'Revenue By Region';
                    break;
                case 'businessFamily':
                    $scope.myDataSource.chart.caption = 'Revenue By Business Family';
                    break;
                case 'top5Customers':
                    $scope.myDataSource.chart.caption = 'Revenue By Top 5 Customers';
                    break;
                case 'businessLine':
                    $scope.myDataSource.chart.caption = 'Revenue By Business Line';
                    break;
            };      
        };
    })
    .controller('barChartController', function($scope){
        var data = 
            {
                'Americas':
                [
                    {
                        "label": "IBM",
                        "value": "8468909"
                    },
                    {
                        "label": "APPLE",
                        "value": "5081345"
                    },
                    {
                        "label": "ZOHO",
                        "value": "3387563"
                    },
                    {
                        "label": "FORCE",
                        "value": "3435355"
                    },
                    {
                        "label": "ORACLE",
                        "value": "5676883"
                    }
                ],
                'EMEA':
                [
                    {
                        "label": "Tesla",
                        "value": "8468909"
                    },
                    {
                        "label": "China Mobile",
                        "value": "5081345"
                    },
                    {
                        "label": "ZOHO",
                        "value": "7454353"
                    },
                    {
                        "label": "FORCE",
                        "value": "4699999s"
                    },
                    {
                        "label": "Apax",
                        "value": "5676883"
                    }
                ],
                'APAC':
                [
                    {
                        "label": "Serivce Now",
                        "value": "6788965"
                    },
                    {
                        "label": "Zetro",
                        "value": "8656546"
                    },
                    {
                        "label": "Sopinaec",
                        "value": "2355466"
                    },
                    {
                        "label": "FORCE",
                        "value": "4365676"
                    },
                    {
                        "label": "ZERO",
                        "value": "5676883"
                    }
                ]                    
            };       
        
        $scope.init = function(type){
            $scope.myDataSource = {
                "chart": 
                {
                    "caption": "Americas",
                    "numberPrefix": "$",
                    "paletteColors": "#e62e00",
                    "bgColor": "#ffffff",
                    "showBorder": "0",
                    "showCanvasBorder": "0",
                    "usePlotGradientColor": "0",
                    "plotBorderAlpha": "10",
                    "placeValuesInside": "1",
                    "valueFontColor": "#ffffff",
                    "showAxisLines": "1",
                    "axisLineAlpha": "25",
                    "divLineAlpha": "20",
                    "alignCaptionWithCanvas": "0",
                    "showAlternateVGridColor": "0",
                    "captionFontSize": "14",
                    "subcaptionFontBold": "0",
                    "toolTipColor": "#ffffff",
                    "toolTipBorderThickness": "0",
                    "toolTipBgColor": "#000000",
                    "toolTipBgAlpha": "40",
                    "toolTipBorderRadius": "2",
                    "toolTipPadding": "5"
                }
            };
            $scope.myDataSource.data = data[type];
            switch (type) {
                case 'Americas':
                    $scope.myDataSource.chart.caption = 'Americas';
                    break;
                case 'APAC':
                    $scope.myDataSource.chart.caption = 'APAC';
                    break;   
                case 'EMEA':
                    $scope.myDataSource.chart.caption = 'EMEA';
                    break;              
            };  
            return $scope.myDataSource;
        };
        $scope.months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        $scope.waterFallDataSource = {
            "New":{
                "JAN": 150000000,
                "FEB": 187000000,
                "MAR": 161000000,
                "APR": 260000000,
                "MAY": 188000000,
                "JUN": 150000000,
                "JUL": 200000000,
                "AUG": 250000000,
                "SEP": 300000000,
                "OCT": 225000000,
                "NOV": 330000000,
                "DEC": 155000000
            },
            "Prior Transaction":{
                "JAN": 200000000,
                "FEB": 150000000,
                "MAR": 250000000,
                "APR": 300000000,
                "MAY": 400000000,
                "JUN": 188000000,
                "JUL": 225000000,
                "AUG": 175000000,
                "SEP": 150000000,
                "OCT": 100000000,
                "NOV": 180000000,
                "DEC": 905000000
            },
            "Total Revenue":{
                "JAN": 225000000,
                "FEB": 550000000,
                "MAR": 850000000,
                "APR": 255000000,
                "MAY": 550000000,
                "JUN": 850000000,
                "JUL": 255000000,
                "AUG": 550000000,
                "SEP": 850000000,
                "OCT": 260000000,
                "NOV": 850000000,
                "DEC": 255000000
            },
            "Cogs":{
                "JAN": 300000000,
                "FEB": 600000000,
                "MAR": 200000000,
                "APR": 300000000,
                "MAY": 600000000,
                "JUN": 200000000,
                "JUL": 300000000,
                "AUG": 600000000,
                "SEP": 200000000,
                "OCT": 300000000,
                "NOV": 200000000,
                "DEC": 300000000
            },
            "Variable Consideration":{
                "JAN": 450000000,
                "FEB": 250000000,
                "MAR": 700000000,
                "APR": 450000000,
                "MAY": 250000000,
                "JUN": 700000000,
                "JUL": 450000000,
                "AUG": 250000000,
                "SEP": 700000000,
                "OCT": 250000000,
                "NOV": 300000000,
                "DEC": 700000000
            },
            "Forecast":{
                "JAN": 600000000,
                "FEB": 350000000,
                "MAR": 195000000,
                "APR": 600000000,
                "MAY": 350000000,
                "JUN": 195000000,
                "JUL": 600000000,
                "AUG": 350000000,
                "SEP": 195000000,
                "OCT": 175000000,
                "NOV": 150000000,
                "DEC": 195000000
            }
        }
        $scope.formatCurrencyAsMillions = function(value){
            return '$'+( (value/1000000)>0 ? parseInt(value/1000000)+'m' : value );
        }
    });