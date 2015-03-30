$(window).load(function(){FusionCharts.ready(function(){
    var showValueCB = document.getElementById('showVal'),
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
                    "showValue": "0",
                    "chartBottomMargin": "25" 
                },
                "value": "75"
            }
        }).render();
    //Set event listener for check boxes
    showValueCB.addEventListener && showValueCB.addEventListener("click", showValue);
    //Function to show/hide value
    function showValue(evt, obj) {
        //Using showValue attribute to show hide gauge value
        if(showVal.checked) {
            fuelWidget.setChartAttribute('showValue', 1);
        }
        else{
            fuelWidget.setChartAttribute('showValue', 0);
        }
    }
});
});