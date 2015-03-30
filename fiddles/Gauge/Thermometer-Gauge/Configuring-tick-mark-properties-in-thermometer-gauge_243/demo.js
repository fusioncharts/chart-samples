$(window).load(function(){FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'thermometer',
        renderAt: 'chart-container',
        id  : 'myThm',
        width: '220',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Temperature Monitor",
                "subcaption": " Central cold store",
                "lowerLimit": "-10",
                "upperLimit": "0",
                "numberSuffix": "°C",
                "decimals" : "1",
                "showhovereffect": "1",
                "gaugeFillColor": "#008ee4",
                "thmOriginX": "100",
                "theme" : "fint",
                "chartBottomMargin" : "20",
                
                
                //Tick Marks auto adjustment 
                "adjustTM" : "1",
                
                //Configuring Tick Positions
                "ticksOnRight" : "0",
                "tickMarkDistance": "5",
                "tickValueDistance" : "2",
                
                // Major Tick Marks
                "majorTMNumber" : "9",
                "majorTMHeight" : "12",
                
                //Minor Tick Marks
                "minorTMNumber" : "4",
                "minorTMHeight" : "7",
                
                //Tick value step          
                "tickValueStep" : "2",
                
            },
            "value": "-6"
        },
        "events" :{
            "initialized": function (evt, arg) {
                var dataUpdate = setInterval(function () {
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
            }  
        }
    })
    .render();
});});