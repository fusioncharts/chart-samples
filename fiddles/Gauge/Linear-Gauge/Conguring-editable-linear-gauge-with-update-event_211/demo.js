$(window).load(function(){FusionCharts.ready(function () {
    var CSIGauge = new FusionCharts({
        type: 'hlineargauge',
        renderAt: 'chart-container',
        id: 'csi-linear-gauge',
        width: '400',
        height: '190',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Target CSAT Score",
                "lowerLimit": "0",
                "upperLimit": "100",
                "numberSuffix": "%",
                "chartBottomMargin": "40",  
                "valueFontSize": "11",  
                "valueFontBold": "0",
                "gaugeFillMix":"{light-10},{light-70},{dark-10}",
                "gaugeFillRatio":"40,20,40",
                "editMode": "1"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "35",
                        "label": "Low",
                        "code": "#e44a00"
                    }, 
                    {
                        "minValue": "35",
                        "maxValue": "70",
                        "label": "Moderate",
                        "code": "#f8bd19"
                    }, 
                    {
                        "minValue": "70",
                        "maxValue": "100",
                        "label": "High",
                        "code": "#6baa01"
                    }
                ]
            },
            "pointers": {
                "pointer": [
                    {
                        "value": "0"
                    }
                ]
            },
            "annotations": {
                "origw": "400",
                "origh": "190",
                "autoscale": "1",
                "groups": [
                    {
                        "id": "range",
                        "items": [
                            {
                                "id": "rangeBg",                                
                                "type": "rectangle",
                                "x" : "$chartCenterX-80",
                                "y": "$chartEndY-35",
                                "tox": "$chartCenterX +80",
                                "toy": "$chartEndY-15",
                                "fillcolor": "#0075c2",
                                "visible": "0"
                            },
                            {
                                "id": "rangeText",
                                "type": "Text",                                
                                "fontSize": "11",                                                                
                                "fillcolor": "#ffffff",
                                "text": "",
                                "x" : "$chartCenterX",
                                "y": "$chartEndY-25"
                            }
                        ]
                    }
                ]
            }
        },
        "events": {
            //Event is raised when a real-time gauge or chart completes updating data.
            //Where we can get the updated data and display the same.
            "realTimeUpdateComplete" : function (evt, arg){
                var annotations = evt.sender.annotations,
                    percentValue = evt.sender.getData(1) * 100,
                    dispValue = parseFloat(Math.round(percentValue) / 100).toFixed(2),
                    colorVal = "#" + ((dispValue > 70) ? "6baa01" : ((dispValue >35 && dispValue < 70 ) ? "f8bd19" : "e44a00") );
                //Showing the annotation background and change its color
                annotations.update('rangeBg', {"visible" : 1,"fillcolor" : colorVal});
                annotations && annotations.update('rangeText', {"text" : "Target CSAT Score is "+dispValue+ "%"});
            }
        }
    })
    .render();
});});