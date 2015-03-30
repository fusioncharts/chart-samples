$(window).load(function(){FusionCharts.ready(function () {
    var conversionChart = new FusionCharts({
        type: 'bubble',
        renderAt: 'chart-container',
        width: '600',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "AdWords campaign of Harry's SuperMart",
                "subcaption": "Performance analysis - conversions in % of total",                
                "xAxisName": "# Conversions",
                "yAxisName": "Cost Per Conversion",
                "numberPrefix": "$",
                "theme": "fint",
                //to overwrite the default hover color in theme
                "plotFillHoverColor": "#6baa01",
                //to set hover alpha
                "bubbleHoverAlpha": "20",
                //to keep hover color and tooltip bg color same
                "toolTipBgColor": "#6baa01",
                "numDivlines": "2",
                "showTrendlineLabels": "0",
                "plotTooltext": "$name : Share in total conversion is $zvalue%"
                
            },
                "categories": [{
                "verticalLineAlpha": "20",
                    "category": [{
                    "label": "0",
                        "x": "0"
                }, {
                    "label": "1500",
                        "x": "1500",
                        "showverticalline": "1"
                }, {
                    "label": "3000",
                        "x": "3000",
                        "showverticalline": "1"
                }, {
                    "label": "4500",
                        "x": "4500",
                        "showverticalline": "1"
                }, {
                    "label": "6000",
                        "x": "6000",
                        "showverticalline": "1"
                }]
            }],
                "dataset": [{
                "data": [{
                    "x": "5540",
                        "y": "16.09",
                        "z": "30.63",
                        "name": "campaign 1"
                }, {
                    "x": "4406",
                        "y": "12.74",
                        "z": "24.36",
                        "name": "campaign 2"
                }, {
                    "x": "1079",
                        "y": "15.79",
                        "z": "5.97",
                        "name": "campaign 3"
                }, {
                    "x": "1700",
                        "y": "8.27",
                        "z": "9.4",
                        "name": "campaign 4"
                }, {
                    "x": "853",
                        "y": "15.89",
                        "z": "4.71",
                        "name": "campaign 5"
                }, {
                    "x": "1202",
                        "y": "10.74",
                        "z": "6.65",
                        "name": "campaign 6"
                }, {
                    "x": "2018",
                        "y": "6.14",
                        "z": "11.16",
                        "name": "campaign 7"
                }, {
                    "x": "413",
                        "y": "19.83",
                        "z": "2.28",
                        "name": "campaign 8"
                }, {
                    "x": "586",
                        "y": "13.96",
                        "z": "3.24",
                        "name": "campaign 9"
                }, {
                    "x": "184",
                        "y": "15.82",
                        "z": "1.02",
                        "name": "campaign 10"
                }, {
                    "x": "311",
                        "y": "5.83",
                        "z": "1.72",
                        "name": "campaign 11"
                }, {
                    "x": "35",
                        "y": "10.76",
                        "z": "0.19",
                        "name": "campaign 12"
                }, {
                    "x": "55",
                        "y": "2.73",
                        "z": "0.3",
                        "name": "campaign 13"
                }, {
                    "x": "6",
                        "y": "21.22",
                        "z": "0.03",
                        "name": "campaign 14"
                }]
            }],
                "trendlines": [{
                "line": [{
                    "startValue": "20",
                        "endValue": "30",
                        "isTrendZone": "1",
                        "color": "#aaaaaa",
                        "alpha": "14"
                }, {
                    "startValue": "10",
                        "endValue": "20",
                        "isTrendZone": "1",
                        "color": "#aaaaaa",
                        "alpha": "7"
                }, {
                    "startValue": "0",
                        "endValue": "10",
                        "isTrendZone": "1",
                        "color": "#aaaaaa",
                        "alpha": "0"
                }]
            }]
        }
    });
    conversionChart.render();
});});