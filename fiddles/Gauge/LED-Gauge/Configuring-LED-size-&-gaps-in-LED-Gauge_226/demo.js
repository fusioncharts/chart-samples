$(window).load(function(){FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'hled',
        renderAt: 'chart-container',
        width: '400',
        height: '150',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Fuel Level Indicator",
                "lowerLimit": "0",
                "upperLimit": "100",
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
                "numberSuffix": "%",
                "valueFontSize": "12",
                "showhovereffect": "1",
                "ledGap" : "0",
                "ChartBottomMargin" : "20",
                "theme" : "fint"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "45"
                    }, 
                    {
                        "minValue": "45",
                        "maxValue": "75"
                    }, 
                    {
                        "minValue": "75",
                        "maxValue": "100"
                    }
                ]
            },
            "value": "92"
        }
        
    })
    .render();
});});