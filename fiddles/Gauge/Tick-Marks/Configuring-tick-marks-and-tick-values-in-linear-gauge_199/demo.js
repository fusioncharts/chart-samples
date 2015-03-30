$(window).load(function(){FusionCharts.ready(function () {
    var tickmarkCB = document.getElementById('tmCB'),
        tickvalueCB = document.getElementById('tvCB'),
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
    tickmarkCB.addEventListener && tickmarkCB.addEventListener("click", showTickMark);
    tickvalueCB.addEventListener && tickvalueCB.addEventListener("click", showTickValue);
    
    //Function to show/hide tick mark
    function showTickMark() {
        //Using showTickMarks attribute to show/hide ticks
        (tickmarkCB.checked) ? cpuGauge.setChartAttribute('showTickMarks', 1) : 
        cpuGauge.setChartAttribute('showTickMarks', 0);
        
    }
    //Function to show/hide tick value
    function showTickValue() {
        //Using showTickValues attribute to show/hide tick value 
        (tickvalueCB.checked) ? cpuGauge.setChartAttribute('showTickValues', 1) :
        cpuGauge.setChartAttribute('showTickValues', 0);
    }
});});