$(window).load(function(){FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'hlineargauge',
        renderAt: 'chart-container',
        width: '400',
        height: '170',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                //Palette
                "palette" : "1",
                "caption": "Server CPU Utilization",
                "subcaption": "food.hsm.com",
                "numberSuffix": "%",
                "chartBottomMargin": "20",
                "gaugeFillMix":"{light-10},{light-70},{dark-10}",
                "gaugeFillRatio":"40,20,40"                
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "35",
                        "label": "Low",
                        "code": "#6baa01"
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
                        "code": "#e44a00"
                    }
                ]
            },
            "pointers": {
                "pointer": [
                    {
                        "borderColor": "#333333",
                        "borderThickness": "2",
                        "borderAlpha": "100",
                        "value": "75"
                    }
                ]
            }
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