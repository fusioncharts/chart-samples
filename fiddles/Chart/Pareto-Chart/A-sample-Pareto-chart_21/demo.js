$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'pareto2d',
        renderAt: 'chart-container',
        width: '600',
        height: '300',
        dataFormat: 'json',
        dataSource: {            
            "chart": {
                "caption": "Employee late arrivals by reported cause",
                "subCaption": "Last month",
                "paletteColors": "#0075c2",
                "lineColor": "#1aaf5d",
                "xAxisName": "Reported Cause",
                "pYAxisName": "No. of Occurrence",
                "sYAxisname": "Cumulative Percentage",
                "bgColor": "#ffffff",
                "borderAlpha": "20",
                "showCanvasBorder": "0",
                "showHoverEffect": "1",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "showValues": "0",                
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",               
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14"
            },
            "data": [
                {
                    "label": "Traffic",
                    "value": "5680"
                },
                {
                    "label": "Family Engagement",
                    "value": "1036"
                },
                {
                    "label": "Public Transport",
                    "value": "950"
                },
                {
                    "label": "Weather",
                    "value": "500"
                },
                {
                    "label": "Emergency",
                    "value": "140"
                },
                {
                    "label": "Others",
                    "value": "68"
                }
            ]
        }
    }).render();    
});});