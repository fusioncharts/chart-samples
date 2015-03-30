$(window).load(function(){FusionCharts.ready(function () {
    var cSatScoreChart = new FusionCharts({
        type: 'angulargauge',
        renderAt: 'chart-container',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {                                
                "caption": "Customer Satisfaction Score",
                "subcaption": "Current week",
                "lowerLimit": "0",
                "upperLimit": "100",
                "theme": "fint",
                "tickValueDistance": "2",
                "trendValueDistance": "2",
                //Attributes to enable and customize hover effect on dial element.
                "showHoverEffect":"1",
                "dialBorderHoverColor":"#000000",
                "dialBorderHoverThickness":"2",
                "dialbgHoverColor":"#ff0000",
                "dialbgHoverAlpha": "100"
            },
            "colorRange": {
                "color": [{
                    "minValue": "0",
                    "maxValue": "45",
                    "code": "#e44a00"
                }, {
                    "minValue": "45",
                    "maxValue": "75",
                    "code": "#f8bd19"
                }, {
                    "minValue": "75",
                    "maxValue": "100",
                    "code": "#6baa01"
                }]
            },            
            "dials": {
                "dial": [{
                    "value": "92",
                    "bgcolor" : "#FFFFFF"
                }]
            }
        }
    });

    cSatScoreChart.render();
});});