$(window).load(function(){FusionCharts.ready(function () {
    var salesChart = new FusionCharts({
        type: 'bulb',
        renderAt: 'chart-container',
        id: 'myChart',
        width: '200',
        height: '200',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Temperature status of deep freezers",
                "upperlimit": "-5",
                "lowerlimit": "-60",
                "captionPadding":"30",
                "showshadow":"0",
                "showvalue": "1",
                "useColorNameAsValue":"1",
                "placeValuesInside":"1",
                "valueFontSize": "16",
                //Cosmetics
                "baseFontColor" : "#333333",
                "baseFont" : "Helvetica Neue,Arial",
                "captionFontSize" : "14",
                "showborder": "0",
                "bgcolor": "#FFFFFF",
                "toolTipColor" : "#ffffff",
                "toolTipBorderThickness" : "0",
                "toolTipBgColor" : "#000000",
                "toolTipBgAlpha" : "80",
                "toolTipBorderRadius" : "2",
                "toolTipPadding" : "5",
            },
            "colorrange": {
                "color": [
                    {
                        "minvalue": "-60",
                        "maxvalue": "-35",
                        "label": "Problem detected!",
                        "code": "#ff0000"
                    }, 
                    {
                        "minvalue": "-35",
                        "maxvalue": "-25",
                        "label": "Alert!",
                        "code": "#ff9900"
                    }, 
                    {
                        "minvalue": "-25",
                        "maxvalue": "-5",
                        "label": "All well!",
                        "code": "#00ff00"
                    }
                ]
            },
            "value": "-5"
        },
        "events":{
            "rendered": function(evtObj, argObj){
                setInterval(function () {
                    var num = (Math.floor(Math.random() * 55)*-1) -5;
                    FusionCharts("myChart").feedData("&value=" + num);
                }, 10000);
            }
        }
    });
    salesChart.render();
    
});
});