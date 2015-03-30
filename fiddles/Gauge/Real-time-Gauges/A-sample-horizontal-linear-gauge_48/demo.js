$(window).load(function(){FusionCharts.ready(function () {
    var ccChart = new FusionCharts({
        type: 'hlineargauge',
        renderAt: 'chart-container',
        id: 'cs-linear-gauge',
        width: '400',
        height: '140',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Server CPU Utilization",
                "subcaption": "food.hsm.com",
                "captionFontColor": "#000000",
                "subcaptionFontBold": "0",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "lowerLimit": "0",
                "upperLimit": "100",
                "numberSuffix": "%",                    
                "valueAbovePointer": "0",                    
                "showShadow": "0",
                "gaugeFillMix": "{light}",
                "valueBgColor": "#ffffff",  
                "valueBgAlpha":"60",
                "valueFontColor":"#000000",
                "pointerBgColor": "#ffffff",
                "pointerBgAlpha": "50",
                "baseFontColor": "#ffffff"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "35",
                        "label": "Low",
                        "code": "#1aaf5d"
                    }, 
                    {
                        "minValue": "35",
                        "maxValue": "70",
                        "label": "Moderate",
                        "code": "#f2c500"
                    }, 
                    {
                        "minValue": "70",
                        "maxValue": "100",
                        "label": "High",
                        "code": "#c02d00"
                    }
                ]
            },
            "pointers": {
                "pointer": [
                    {
                        "value": "72.5"
                    }
                ]
            }
        },
        "events": {
            "rendered" : function (evtObj, argObj){
                var intervalVar = setInterval(function () {
                    var prcnt = 65 + parseInt( Math.floor(Math.random() * 10), 10);
                    FusionCharts.items["cs-linear-gauge"].feedData("value="+prcnt);
                }, 5000);
            }
        }
    })
    .render();
});});