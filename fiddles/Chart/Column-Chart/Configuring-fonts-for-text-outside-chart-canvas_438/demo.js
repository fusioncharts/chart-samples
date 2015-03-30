$(window).load(function(){FusionCharts.ready(function () {
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
                //Font Properties
                "outCnvBaseFont": "Arial",
                "outCnvbaseFontSize": "10",
                "outCnvbaseFontColor": "#993300",
                 //Theme
                "theme" : "fint"
            },
            "data": [
                {
                    "label": "Q1",
                    "value": "1950000"
                }, 
                {
                    "label": "Q2",
                    "value": "1450000"
                }, 
                {
                    "label": "Q3",
                    "value": "1730000"
                }, 
                {
                    "label": "Q4",
                    "value": "2120000"
                }
            ]
        }
    });

    revenueChart.render();
});});