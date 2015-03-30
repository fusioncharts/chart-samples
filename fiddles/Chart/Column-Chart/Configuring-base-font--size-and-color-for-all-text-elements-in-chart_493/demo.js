$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        id: 'myChart',
        width: '600',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly revenue for last year",
                "xAxisName": "Quarter",
                "yAxisName": "Amount",
                "yaxismaxvalue": "2720000",
                "numberPrefix": "$",
                //Base font configuration
                "baseFont":"Verdana",
                "baseFontSize":"11",
                "baseFontColor":"#0066cc",
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