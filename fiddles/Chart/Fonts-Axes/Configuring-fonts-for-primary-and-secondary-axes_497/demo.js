$(window).load(function(){FusionCharts.ready(function () {
    var salesAnalysisChart = new FusionCharts({
        type: 'mscombidy2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Sales Analysis",
                "subCaption": "Last year",
                "xAxisname": "Quarter",
                "pYAxisName": "Amount (In USD)",
                "sYAxisName": "Employees",
                "numberPrefix": "$",
                "theme": "fint",
                "showValues": "0",
                //Font properties for primary y-axis
                "pYAxisNameFont": "Arial",
                "pYAxisNameFontSize": "14",
                "pYAxisNameFontColor": "#0075c2",
                "pYAxisNameFontBold": "1",
                "pYAxisNameFontItalic": "1",
                "pYAxisNameAlpha": "100",
                //Font properties for secondary y-axis
                "sYAxisNameFont": "Arial",
                "sYAxisNameFontSize": "14",
                "sYAxisNameFontColor": "#f2c500",
                "sYAxisNameFontBold": "1",
                "sYAxisNameFontItalic": "1",
                "sYAxisNameAlpha": "100"
            },
            "categories": [{
                "category": [{
                    "label": "Q1"
                }, {
                    "label": "Q2"
                }, {
                    "label": "Q3"
                }, {
                    "label": "Q4"
                }]
            }],
            "dataset": [{
                "seriesname": "Revenue",
                "showvalues": "1",
                "data": [{
                    "value": "48000"
                }, {
                    "value": "60000"
                }, {
                    "value": "54000"
                }, {
                    "value": "57000"
                }]
            }, {
            "seriesname": "Profit",
                "renderas": "area",
                "data": [{
                    "value": "12000"
                }, {
                    "value": "15000"
                }, {
                    "value": "9000"
                }, {
                    "value": "12000"
                }]
            }, {
            "seriesname": "Employees",
                "parentyaxis": "S",
                "renderas": "line",
                "data": [{
                    "value": "150"
                }, {
                    "value": "180"
                }, {
                    "value": "200"
                }, {
                    "value": "230"
                }]
            }]
        }
    }).render();
});});