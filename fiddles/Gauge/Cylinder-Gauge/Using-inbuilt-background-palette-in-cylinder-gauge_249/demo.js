$(window).load(function(){FusionCharts.ready(function(){
    var fuelWidget = new FusionCharts({
        type: 'cylinder',
        dataFormat: 'json',
        id: 'fuelMeter',
        renderAt: 'chart-container',
        width: '200',
        height: '350',
        dataSource: {
            "chart": {
                //Palette
                "palette" : "1",
                "caption": "Diesel Level in Generator",
                "subcaption": "Bakersfield Central",
                "lowerLimit": "0",
                "upperLimit": "120",
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
                "numberSuffix": " ltrs",
                "chartBottomMargin": "25"
            },
            "value": "75"
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
    }).render();
});
});