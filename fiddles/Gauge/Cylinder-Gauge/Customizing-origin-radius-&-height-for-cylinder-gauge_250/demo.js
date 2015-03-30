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
                "theme": "fint",
                "caption": "Diesel Level in Generator",
                "subcaption": "Bakersfield Central",
                "lowerLimit": "0",
                "upperLimit": "120",
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
                "numberSuffix": " ltrs",
                "showValue": "1",
                //Customizing the origin x position
                "cyloriginx":"30", 
                //Customizing the origin y position
                "cyloriginy":"260", 
                //Setting the radius of the Cylinder
                "cylradius":"40", 
                //Setting the height of the Cylinder
                "cylheight":"150"
            },
            "value": "75"
        }
    }).render();
});
});