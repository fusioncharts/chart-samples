$(window).load(function(){FusionCharts.ready(function () {
    var csChart = new FusionCharts({
        type: 'vled',
        renderAt: 'chart-container',
        width: '150',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Customer score",                
                "subcaptionFontBold": "0",
                "lowerLimit": "0",
                "upperLimit": "100",
                "lowerLimitDisplay": "Bad",
                "upperLimitDisplay": "Good",
                "numberSuffix": "%",
                "showValue": "0",                
                "showBorder": "0",
                "showShadow": "0",
                "tickMarkDistance": "5",
                "alignCaptionWithCanvas": "1",
                "captionAlignment": "center",
                "bgcolor":"#ffffff"
            },
            "colorRange": {
                "color": [{
                    "minValue": "0",
                    "maxValue": "45",
                    "code": "#8e0000"
                }, {
                    "minValue": "45",
                    "maxValue": "75",
                    "code": "#f2c500"
                }, {
                    "minValue": "75",
                    "maxValue": "100",
                    "code": "#1aaf5d"
                }]
            },
            "value": "92"
        }
    })
    .render();
});});