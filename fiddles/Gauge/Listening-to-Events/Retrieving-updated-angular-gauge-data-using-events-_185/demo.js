$(window).load(function(){FusionCharts.ready(function () {
    var cSatScoreChart = new FusionCharts({
        type: 'angulargauge',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Average Customer Satisfaction Score",
                "subcaption": "Last month",
                "lowerLimit": "0",
                "upperLimit": "100",
                "editMode": "1",
                "showValue": "1",
                "valueBelowPivot": "1",
                "tickValueDistance": "25",                               
                "theme": "fint",
                "gaugeFillMix": "{dark-30},{light-60},{dark-10}",
                "gaugeFillRatio": "15",
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "50",
                        "code": "#e44a00"                                                
                    },
                    {
                        "minValue": "50",
                        "maxValue": "75",
                        "code": "#f8bd19"                        
                    },
                    {
                        "minValue": "75",
                        "maxValue": "100",
                        "code": "#6baa01"                        
                    }
                ]
            },
            "dials": {
                "dial": [                    
                    {
                        "id": "crntYr",
                        "value": "78",
                        "showValue": "1",                        
                        "tooltext": "Current year's average : $value",
                        "rearExtension": "15"
                    }
                ]
            }
        },
        events: {
            "realtimeUpdateComplete": function(evtObj, argObj){
                var updtObj = argObj && argObj.updateObject,
                    values = updtObj && updtObj.values,
                    updtValStr = values && values[0],
                    updtVal = updtValStr && 
                                parseFloat(updtValStr).toFixed(2),
                    divToUpdate = document.getElementById("score-detail");
                
                divToUpdate.innerHTML = "Last month's average satisfaction score: <b>" + updtVal + "</b>";

                
            }
        }
    }).render();
});});