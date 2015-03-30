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
                    //To set the number of major tickmarks
                    "majorTMNumber":"9",
                    //To set the number of minor tick marks 
                    //in between major tick marks
                    "minorTMNumber":"1",
                    //To adjust the tickmark and values automatically 
                    //to a best feasible value
                    "adjustTM": "0"
                },
                "value": "75"
                
            }
        }).render();
});
});