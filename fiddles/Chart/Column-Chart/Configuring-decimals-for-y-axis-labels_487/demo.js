$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Average value of online refunds",
                "subcaption": "Last year",
                "xaxisname": "Quarter",
                "yaxisname": "Amount (In 000 USD)",
                "placeValuesInside" :"0",
                "rotateValues": "0",
                "valueFontColor": "#000000",
                //Setting flag to manually specify div lines                
                "adjustDiv": "0",
                //Setting 3 dvisional lines on y-axis
                "numdivlines": "3",
                //Manually setting y-axis lower limit
                "yAxisMinValue": "60",     
                //Setting number of decimals on y-axis to 2
                "yAxisValueDecimals":"2",
                "forceYAxisValueDecimals": "1", 
                //Theme 
                "theme" : "fint"
                
            },
            "data": [
                {
                    "label": "Q1",
                    "value": "125"
                }, 
                {
                    "label": "Q2",
                    "value": "257"
                }, 
                {
                    "label": "Q3",
                    "value": "173"
                }, 
                {
                    "label": "Q4",
                    "value": "182"
                }
            ]
        }
    });
    
    revenueChart.render();
});});