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
                //Tick mark cosmetics
                "majorTMColor":"#1aaf5d",
                "majorTMAalpha":"100", 
                "majorTMHeight":"10", 
                "majorTMThickness":"2", 
                "minorTMColor":"#1aaf5d", 
                "minorTMAlpha":"100", 
                "minorTMHeight":"7", 
                "minorTMThickness":"1", 
                "tickmarkDistance":"5"
            },
            "value": "75"
        }
    }).render();
});
});