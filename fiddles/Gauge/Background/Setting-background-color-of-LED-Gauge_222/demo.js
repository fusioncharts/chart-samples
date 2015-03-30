$(window).load(function(){FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'hled',
        renderAt: 'chart-container',
        width: '400',
        height: '150',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Fuel Level Indicator",
                "lowerLimit": "0",
                "upperLimit": "100",
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
                "numberSuffix": "%",
                "valueFontSize": "12",
                "showhovereffect": "1",
                "tickMarkDistance" : "10",
                
                //Gauge fill color
                "gaugeFillColor" : "#444444",
                
                "theme" : "fint"
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
            "value": "92"
        },
        "events" : {
            "drawComplete": function(evt, arg){
                var i,
                    //Annotation
                    annotations = evt.sender.annotations,
                    //Value
                    val = evt.sender.getData(),
                    //Color Range Array
                    crArr = evt.sender.args.dataSource.colorRange.color;
        
                for (i = crArr.length-1; i>=0; i-- ) {
                    //When value falls within the color range
                    if(val >= crArr[i].minValue && val <= crArr[i].maxValue)
                    {
                        annotations.update('bgRectAngle', {"fillColor": crArr[i].code});
                    }
                }
              
            }
        }
        
    })
    .render();
});});