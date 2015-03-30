$(window).load(function(){FusionCharts.ready(function(){
    var tickmarkCB = document.getElementById('tmCB'),
        tickvalueCB = document.getElementById('tvCB'),
        fuelWidget = new FusionCharts({
            type: 'cylinder',
            dataFormat: 'json',
            id: 'fuelMeter',
            renderAt: 'chart-container',
            width: '150',
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
                    "showTickValues": "0",
                    "showTickMarks": "0",
                    "ticksOnRight": "1"
                },
                "value": "75"
            }
        }).render();
    
    //Function to show/hide tick mark
    function showTickMark(evt, obj) {
        //Using showTickMarks attribute to show/hide ticks
        (tickmarkCB.checked) ? fuelWidget.setChartAttribute('showTickMarks', 1) : 
        fuelWidget.setChartAttribute('showTickMarks', 0);
        
    }
    //Function to show/hide tick value
    function showTickValue(evt, obj) {
        //Using showTickValues attribute to show/hide tick value 
        (tickvalueCB.checked) ? fuelWidget.setChartAttribute('showTickValues', 1) :
        fuelWidget.setChartAttribute('showTickValues', 0);
    }
    
    //Set event listener for check boxes and radio buttons
    tickmarkCB.addEventListener && tickmarkCB.addEventListener("click", showTickMark);
    tickvalueCB.addEventListener && tickvalueCB.addEventListener("click", showTickValue);
});
});