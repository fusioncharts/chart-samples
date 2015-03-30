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
                "numberSuffix": "%",
                
                //Gauge Limits
                "lowerLimit": "0",
                "upperLimit": "100",
                
                //Tick Limits Display Values
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
 
                "chartBottomMargin" : "20",
                "theme" : "fint"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "45",
                        "code": "#e44a00"
                    }, 
                    {
                        "minValue": "45",
                        "maxValue": "75",
                        "code": "#f8bd19"
                    }, 
                    {
                        "minValue": "75",
                        "maxValue": "100",
                        "code": "#6baa01"
                    }
                ]
            },
            "value": "92"
        }
        
    })
    .render();
});});