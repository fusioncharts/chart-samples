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
                //Changing the Cylinder fill color
                "cylFillColor": "#1aaf5d"
            },
            "value": "75"
        }
    }).render();
});
});