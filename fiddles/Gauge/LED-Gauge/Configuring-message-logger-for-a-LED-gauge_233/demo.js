$(window).load(function(){FusionCharts.ready(function () {
    var chargePercent = 50,
        flag = 0,
        count = 0,
        chart = new FusionCharts({
            type: 'hled',
            renderAt: 'chart-container',
            id : 'myHLED',
            width: '300',
            height: '200',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Battery Charge Remaining",
                    "lowerLimit": "0",
                    "upperLimit": "100",
                    "showTickMarks": "0",
                    "numberSuffix": "%",
                    "valueFontSize" : "12",
                    "origW": "300",
                    "origH": "200",
                    "ledGap" :"0",
                    "showhovereffect": "1",
                    "useSameFillColor" : "1",
                    "chartBottomMargin": "20",
                    //Single Fill color
                    "useMessageLog": "1",
                    
                    "theme" : "fint"
                },
                //All annotations are grouped under this element
                "annotations": {
                    
                    "groups": [                        
                        {                  
                            //Each group needs a unique ID
                            "id": "indicator",
                            "showbelow": "1",
                            "items": [
                                
                                {
                                    "id": "bgRectAngle",
                                    //Polygon item 
                                    "type": "rectangle",
                                    "radius" : "5",
                                    "fillColor": "#222222",            
                                    "x" : "$gaugeEndX - 10",
                                    "tox" : "$gaugeEndX + 12",
                                    "y" : "$gaugeCenterY-20",
                                    "toy" : "$gaugeCenterY + 20"
                                }
                            ]
                        },
                        {                  
                            //Each group needs a unique ID
                            "id": "remainingTime",
                            "showbelow": "0",
                            "items": [
                                
                                {
                                    "id": "remainingTxt",
                                    //Polygon item 
                                    "type": "text",
                                    "text" : "",
                                    "fontColor": "#FFFFFF",
                                    "fontSize" : "12",
                                    "bold" : "1",
                                    "x" : "$gaugeCenterX",
                                    "y" : "$gaugeCenterY",
                                }
                            ]
                        }
                    ]
                    
                },
                "colorRange": {
                    "color": [
                        {
                            "minValue": "0",
                            "maxValue": "45",
                            "code": "#e44a00"
                        }, 
                        {
                            "minValue": "45",
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
                "value": "50"
            },
            "events" :{
                "renderComplete" : function (evt, arg) {
                    var chargeInterval = setInterval( function(){
                        var minutes,
                            hr,
                            min,
                            strMsg,
                            dt = new Date(),
                            time = dt.getHours() +"-"+dt.getMinutes()+"-"+dt.getSeconds();
                        
                        if(flag === 0 ){
                            count++;
                            if(count > 4){
                                chargePercent -= 5;
                                count = 0;
                            }
                            
                            if(chargePercent === 5)
                            {
                                flag = 1;
                            }
                        }
                        else
                        {
                            chargePercent += 5;
                            if(chargePercent === 100)
                            {
                                flag = 0;
                            }
                        }
                        // Hour-Minute string  formation
                        minutes = 2.4 * chargePercent;
                        hr = parseInt(minutes/60);
                        hr = (hr <= 0) ? "" : hr + ((hr === 1)? " hour " : " hours ");
                        min = minutes % 60;
                        min = (min <= 0) ? "" : ((min < 9) ? "0"+ min : min) + " minutes "; 
                        strMsg = "<br>"+hr+ min+"remaining...";
                        if((flag === 0 && count === 0) || flag === 1)
                        { FusionCharts.items["myHLED"].feedData("&value="+chargePercent+"&msgTitle="+time + "&msgText="+ strMsg );
                        }
                    }, 2000);
                }
            }
            
        })
    .render();
});});