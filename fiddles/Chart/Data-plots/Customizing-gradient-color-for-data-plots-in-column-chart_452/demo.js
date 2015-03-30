$(window).load(function(){FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly Revenue",
                "subCaption": "Last year",
                "xAxisName": "Quarter",
                "yAxisName": "Amount (In USD)",
                "numberPrefix": "$",
                "theme": "fint",
                //Using plot gradient color
                "usePlotGradientColor": "1",
                //Applying plot gradient color
                "plotGradientColor": "#1aaf5d",
                //Applying fill angle for plots
                "plotFillAngle": "0",
                //Applying fill ratio for plots
                "plotFillRatio": "50,0"
            },
            "data": [
                {
                    "label": "Q1",
                    "value": "1950000"
                }, {
                    "label": "Q2",
                    "value": "1450000"
                }, {
                    "label": "Q3",
                    "value": "1730000"
                }, {
                    "label": "Q4",
                    "value": "2120000"
                }
            ]
        }
    }).render();

});});