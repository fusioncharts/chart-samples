$(window).load(function(){FusionCharts.ready(function(){
    var fuelWidget = new FusionCharts({
        type: 'cylinder',
        dataFormat: 'json',
        id: 'fuelMeter',
        renderAt: 'chart-container',
        width: '200',
        height: '350',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Diesel Level in Generator",
                "subcaption": "Bakersfield Central",
                "lowerLimit": "0",
                "upperLimit": "120",
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
                "numberSuffix": " ltrs",
                "showValue": "1",
                "chartBottomMargin": "25",
                //Customizing cylinder fill color on hover/touch
                "cylFillHoverColor": "#0099fd",
                //Customizing cylinder transparency on hover/touch
                "cylFillHoverAlpha": "85"
            },
            "value": "75"
        }
    }).render();
});
});