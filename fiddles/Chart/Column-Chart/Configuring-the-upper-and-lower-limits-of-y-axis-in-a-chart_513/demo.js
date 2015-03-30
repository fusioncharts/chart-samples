$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        id: 'myChart',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Quarterly revenue for last year",
                "xAxisName": "Quarter",
                "yAxisName": "Amount",
                "numberPrefix": "$",
                //Changed to a lesser value deliberately to show automatic calculation of chart limits
                "yAxisMaxValue": "2000000"
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
                    //Maximum value. Chart automatically define chart limit based on max value.
                    "value": "2120000"
                }
            ]
        }
    }).render();
    
});});