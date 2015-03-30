$(window).load(function(){FusionCharts.ready(function(){
    var rightRBtn = document.getElementById('rightRB'),        
        leftRBtn = document.getElementById('leftRB'),
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
                    "ticksOnRight": "0"
                },
                "value": "75"
            }
        }).render();
    
    //Function to set the ticksOnRight attribute value based on which radio is selected
    function changePosition(evt,obj){
        (document.getElementById('rightRB').checked) ?
            fuelWidget.setChartAttribute('ticksOnRight', 1) :
        fuelWidget.setChartAttribute('ticksOnRight', 0);
    }
    
    //Set event listener for check boxes and radio buttons
    rightRBtn.addEventListener && rightRBtn.addEventListener("click", changePosition);
    leftRBtn.addEventListener && leftRBtn.addEventListener("click", changePosition);
    
});
});