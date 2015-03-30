$(window).load(function(){FusionCharts.ready(function () {
    var showCheckBox = document.getElementById('showCB'),
        posCheckBox = document.getElementById('positionCB'),
        cpuGauge = new FusionCharts({
            type: 'hlineargauge',
            renderAt: 'chart-container',
            width: '400',
            height: '150',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "theme": "fint",
                    "caption": "Server CPU Utilization",
                    "subcaptionFontBold": "0",
                    "lowerLimit": "0",
                    "upperLimit": "100",
                    "numberSuffix": "%",
                    "chartBottomMargin": "20",
                    "captionPadding": "10",
                    "valueAbovePointer": "0",
                    "valueFontSize": "13",  
                    "valueFontBold": "0",
                    "gaugeFillMix":"{light-10},{light-70},{dark-10}",
                "gaugeFillRatio":"40,20,40"
                },
                "colorRange": {
                    "color": [
                        {
                            "minValue": "0",
                            "maxValue": "35",
                            "label": "Low"
                        }, 
                        {
                            "minValue": "35",
                            "maxValue": "70",
                            "label": "Moderate"
                        }, 
                        {
                            "minValue": "70",
                            "maxValue": "100",
                            "label": "High"
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
    showCheckBox.addEventListener && showCheckBox.addEventListener("click", showValue);
    posCheckBox.addEventListener && posCheckBox.addEventListener("click", setPosition);
       
    //Function to show hide value
    function showValue(evt, obj) {
        //Using showValue attribute to show hide pointer value
        if(showCB.checked) {
            cpuGauge.setChartAttribute('showValue', 1);
            posCheckBox.disabled = false;
        }
        else{
            cpuGauge.setChartAttribute('showValue', 0);
            posCheckBox.disabled = true;
        }
    }
    //Function to change value pointer
    function setPosition(evt, obj) {
        //Using valueAbovePointer attribute to toggle position of pointer value 
        (posCheckBox.checked) ? cpuGauge.setChartAttribute('valueAbovePointer', 1) :
        cpuGauge.setChartAttribute('valueAbovePointer', 0);
    }
    
});});