$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly Revenue",
                "subCaption": "For last year",
                "xAxisName": "Quarter",
                "yAxisName": "Amount (In USD)",
                "numberPrefix": "$",
                //Y-Axis Name font/ cosmetics configuration
                "yAxisNameFont": "Arial",
                "yAxisNameFontSize": "14",
                "yAxisNameFontColor": "#0066cc",
                "yAxisNameFontBold": "1",
                "yAxisNameFontItalic": "1",
                "yAxisNameAlpha": "100",
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