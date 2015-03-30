$(window).load(function(){FusionCharts.ready(function () {
    var cSatScoreChart = new FusionCharts({
        type: 'angulargauge',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Server CPU Utilization",
                "subcaption": "forum.hsm.com",
                "lowerLimit": "0",
                "upperLimit": "100",
                "editMode": "1",
                "showValue": "1",
                "valueBelowPivot": "1",
                "tickValueDistance": "25",
                "gaugeFillMix": "{dark-30},{light-60},{dark-10}",
                "gaugeFillRatio": "15",
                "theme": "fint",
                "valueFontSize": "14"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "50",
                        "code": "#6baa01"                                                
                    },
                    {
                        "minValue": "50",
                        "maxValue": "75",
                        "code": "#f8bd19"                        
                    },
                    {
                        "minValue": "75",
                        "maxValue": "100",
                        "code": "#e44a00"                        
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
                        "rearExtension": "5"
                    }
                ]
            }
        },
        events: {
            "rendered" : function (evtObj, argObj){
                var intervalVar = setInterval(function () {
                    var chartIns = evtObj.sender,
                        prcnt = 65 + parseInt( Math.floor(Math.random() * 10), 10);
                    
                    chartIns.feedData("value="+prcnt);
                    
                }, 5000);
            },
            "realtimeUpdateComplete": function(evtObj, argObj){
                var updtObj = argObj && argObj.updateObject,
                    values = updtObj && updtObj.values,
                    updtValStr = values && values[0],
                    updtVal = updtValStr && 
                                parseFloat(updtValStr).toFixed(0),
                    divToUpdate = document.getElementById("score-detail");
                
                divToUpdate.innerHTML = "Current server CPU Utilization is : <b>" + updtVal + "</b>";

                
            }
        }
    }).render();
});});