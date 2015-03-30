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
                "showValue": "1",
                "valueFontSize": "12",
                "showhovereffect": "1",
                "chartBottomMargin" : "20",
                //Palette
                "palette" : "1"
                
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
            "initialized" : function(evtObj, argObj){
                var radElem,
                    radio = document.getElementsByTagName('input');
                for (i = 0; i < radio.length; i++) {
                    radElem = radio[i];
                    if (radElem.type === 'radio')     
                    {                        
                        radElem.onclick = function()
                        {
                            val = this.getAttribute('value');
                            evtObj.sender.setChartAttribute( "palette" , val );
                            
                        };
                    }
                }   
            }
            
        }
        
    })
    .render();
});});