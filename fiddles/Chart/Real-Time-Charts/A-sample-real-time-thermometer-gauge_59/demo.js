$(window).load(function(){FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'thermometer',
        renderAt: 'chart-container',
        id: 'temp-monitor',
        width: '120',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Central cold storage",
                "subcaption": "Bakersfield Central",
                "subcaptionFontBold": "0",
                "lowerLimit": "-20",
                "upperLimit": "20",
                "numberSuffix": "°C",                
                "bgColor": "#ffffff",
                "showBorder": "0",
                "thmFillColor": "#008ee4"
            },
            "value": "-10"
        },
        "events": {
            "rendered" : function (evtObj, argObj){
                var intervalVar = setInterval(function () {
                    var temp = -10 + parseInt( Math.floor(Math.random() * 6), 10);
                    FusionCharts.items["temp-monitor"].feedData("value="+temp);
                }, 3000);
            }
        }
    })
    .render();
});});