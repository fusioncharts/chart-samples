$(window).load(function(){FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'thermometer',
        renderAt: 'chart-container',
        id  : 'myThm',
        width: '240',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Temperature Monitor",
                "subcaption": " Central cold store",
                "lowerLimit": "-10",
                "upperLimit": "0",
                "numberSuffix": "°C",
                "showhovereffect": "1",
                "thmOriginX": "100",
                //Palette
                "palette" : "1"
            },
            "value": "-6",
        },
        "events" :{
            "rendered" : function (evt, arg) {
                var chargeInterval = setInterval( function(){
                    var temp = parseInt(Math.random()*2) -5;
                    FusionCharts.items["myThm"].feedData("&value="+temp);
                }, 4000);
            },
            "initialized" : function(evtObj, argObj){
                var radElem,
                    radio = document.getElementsByTagName('input'),
                    dataUpdate = setInterval(function () {
                    var value,
                        prevTemp = FusionCharts.items["myThm"].getData(),
                        mainTemp = (Math.random()*10)* (-1),
                        diff = Math.abs(prevTemp - mainTemp);
                    
                    diff = diff > 1 ? (Math.random()*1) : diff;
                    if(mainTemp > prevTemp){
                        value = prevTemp + diff;
                    }else{
                        value = prevTemp - diff;
                    }                            
                    FusionCharts.items["myThm"].feedData("&value="+value);
                }, 3000);
                
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