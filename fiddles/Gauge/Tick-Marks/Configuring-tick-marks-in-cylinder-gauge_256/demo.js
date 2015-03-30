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
                    "majorTMNumber":"8",
                    "minorTMNumber":"2",
                    //To adjust the tickmark and values automatically 
                    //to a best feasible value
                    "adjustTM": "0"
                },
                "value": "75"
                
            }
        }).render();
    //Set event listener for check boxes
    adjustTickCB.addEventListener && adjustTickCB.addEventListener("click", adjustTicks);
    //Function to show/hide labels
    function adjustTicks(evt, obj) {
        //Using adjustTM attribute to adjust the 
        //number of major ticks to a best feasible value
        if(adjustTickCB.checked) {
            fuelMeter.setChartAttribute('adjustTM', 1);
        }
        else{
            fuelMeter.setChartAttribute('adjustTM', 0);
        }
    }
});
});