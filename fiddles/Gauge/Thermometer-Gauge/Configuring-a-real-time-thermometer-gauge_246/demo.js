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
                "decimals" : "1",
                "showhovereffect": "1",
                "thmFillColor": "#008ee4",
                "showGaugeBorder" : "1",
                "gaugeBorderColor" :  "#008ee4",
                "gaugeBorderThickness" :  "2",
                "gaugeBorderAlpha" :  "30",
                "thmOriginX": "100",
                "theme" : "fint"
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