$(window).load(function(){FusionCharts.ready(function(){
    var fuelVolume = 110,
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
                    "chartBottomMargin": "45",
                    "showValue": "0"
                },
                "value": "75",
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
                                    "x" : "$canvasCenterX-45",
                                    "y": "$chartEndY-30",
                                    "tox": "$canvasCenterX +45",
                                    "toy": "$chartEndY-75",
                                    "fillcolor": "#6caa03"
                                },
                                {
                                    "id": "rangeText",
                                    "type": "Text",                                
                                    "fontSize": "11",                                                                
                                    "fillcolor": "#333333",
                                    "text": "80 ltrs",
                                    "x" : "$chartCenterX-45",
                                    "y": "$chartEndY-50"
                                }
                            ]
                        }
                    ]
                }
                
            },
            "events":{
                "rendered": function(evtObj, argObj){
                    setInterval(function () {
                        (fuelVolume < 10) ? (fuelVolume = 80) : "";
                        var consVolume = fuelVolume -(Math.floor(Math.random() * 3));
                        FusionCharts("fuelMeter").feedData("&value=" + consVolume);
                        fuelVolume = consVolume;
                    }, 1000);
                },
                //Using real time update event to update the annotation 
                //showing available volume of Diesel
                "realTimeUpdateComplete" : function (evt, arg){
                    var annotations = evt.sender.annotations,
                        dataVal = evt.sender.getData(),
                        colorVal = (dataVal >= 70)? "#6caa03" : ((dataVal <= 35)? "#e44b02" :"#f8bd1b");
                    //Updating value
                    annotations && annotations.update('rangeText', {"text" : dataVal + " ltrs"});
                    //Changing background color as per value
                    annotations && annotations.update('rangeBg', {"fillcolor" : colorVal});
                    
                }
            }
        }).render();
});
});