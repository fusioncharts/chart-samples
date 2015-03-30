$(window).load(function(){FusionCharts.ready(function(){
    var adjustTickCB = document.getElementById('tMarkCB'),
        fuelWidget = new FusionCharts({
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
                    "majorTMNumber":"13",
                    "minorTMNumber":"1",
                    "adjustTM": "0",
                    //To show every 2nd major tick mark's value
                    "tickValueStep": "2"
                },
                "value": "75"
                
            }
        }).render();
});
});