$(window).load(function(){FusionCharts.ready(function () {
    var adjustTickCB = document.getElementById('tMarkCB'),
        cpuGauge = new FusionCharts({
        type: 'hlineargauge',
        renderAt: 'chart-container',
        id: 'cpu-linear-gauge',
        width: '400',
        height: '170',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Server CPU Utilization",
                "lowerLimit": "0",
                "upperLimit": "100",
                "numberSuffix": "%",
                "chartBottomMargin": "20",  
                "valueFontSize": "11",  
                "valueFontBold": "0",
                //To set the number of major tickmarks
                "majorTMNumber":"9",
                //To set the number of minor tick marks 
                //in between major tick marks
                "minorTMNumber":"5",
                //To adjust the tickmark and values automatically 
                //to a best feasible value
                "adjustTM": "1",
                "gaugeFillMix":"{light-10},{light-70},{dark-10}",
                "gaugeFillRatio":"40,20,40"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "35",
                        "label": "Low",
                    }, 
                    {
                        "minValue": "35",
                        "maxValue": "70",
                        "label": "Moderate",
                    }, 
                    {
                        "minValue": "70",
                        "maxValue": "100",
                        "label": "High",
                    }
                ]
            },
            "pointers": {
                "pointer": [
                    {
                        "value": "75"
                    }
                ]
            }
        }
    })
    .render();
     //Set event listener for check boxes
    adjustTickCB.addEventListener && adjustTickCB.addEventListener("click", adjustTicks);
    //Function to show/hide labels
    function adjustTicks(evt, obj) {
        //Using adjustTM attribute to adjust the 
        //number of major ticks to a best feasible value
        if(adjustTickCB.checked) {
            cpuGauge.setChartAttribute('adjustTM', 1);
        }
        else{
            cpuGauge.setChartAttribute('adjustTM', 0);
        }
    }
});});