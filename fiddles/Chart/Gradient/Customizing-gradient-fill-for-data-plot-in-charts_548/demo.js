$(window).load(function(){FusionCharts.ready(function () {
    var salesChart = new FusionCharts({
        type: 'area2d',
        renderAt: 'chart-container',
        width: '600',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Sales of liquor",
                "subCaption": "Last week",
                "xAxisName": "Day",
                "yAxisName": "Sales (In USD)",
                "numberPrefix": "$",
                "theme": "fint",
                //Setting gradient fill to off.
                "usePlotGradientColor": "0"
            },            
            "data": [
                {
                    "label": "Mon",
                    "value": "4123"
                }, 
                {
                    "label": "Tue",
                    "value": "4633"
                }, 
                {
                    "label": "Wed",
                    "value": "5507"
                }, 
                {
                    "label": "Thu",
                    "value": "4910"
                }, 
                {
                    "label": "Fri",
                    "value": "5529"
                }, 
                {
                    "label": "Sat",
                    "value": "5803"
                }, 
                {
                    "label": "Sun",
                    "value": "6202"
                }
            ]
        }
    }).render();
});});