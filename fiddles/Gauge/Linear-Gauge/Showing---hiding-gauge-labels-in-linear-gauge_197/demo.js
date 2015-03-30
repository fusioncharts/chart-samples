$(window).load(function(){FusionCharts.ready(function () {
    var showLabelCB = document.getElementById('showLbl'),
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
                    "showGaugeLabels": "1",
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
    showLabelCB.addEventListener && showLabelCB.addEventListener("click", showLabels);
    //Function to show/hide labels
    function showLabels() {
        //Using showGaugeLabels attribute to show hide gauge labels
        if(showLbl.checked) {
            cpuGauge.setChartAttribute('showGaugeLabels', 1);
        }
        else{
            cpuGauge.setChartAttribute('showGaugeLabels', 0);
        }
    }
});});