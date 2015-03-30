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
                "theme": "fint",
                "numberPrefix": "$",
                //Setting the usage of plot gradient
                "usePlotGradientColor": "1",
                //Custom plot gradient color
                "plotGradientColor": "#eeeeee"
            },
            "data": [
                {
                    "label": "Q1",
                    "value": "1950000",
                    "color": "#008ee4"
                }, 
                {
                    "label": "Q2",
                    "value": "1450000",
                    "color": "#9b59b6"
                }, 
                {
                    "label": "Q3",
                    "value": "1730000",
                    "color": "#6baa01"
                }, 
                {
                    "label": "Q4",
                    "value": "2120000",
                    "color": "#e44a00"
                }
            ]
        }
    }).render();

});});