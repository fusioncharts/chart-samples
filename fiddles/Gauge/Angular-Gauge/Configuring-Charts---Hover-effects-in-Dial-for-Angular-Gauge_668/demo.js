$(window).load(function(){FusionCharts.ready(function () {
    var cSatScoreChart = new FusionCharts({
        type: 'angulargauge',
        renderAt: 'chart-container',
        width: '400',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Customer Satisfaction Score",
                "subcaption": "Last week",
                "theme": "fint",
                //To show/hide hover effect
                "showHoverEffect": "1",
                //Changing dial border hover color
                "dialBorderHoverColor":"#aa0000",
                //Changing dial border thickness on hover
                "dialBorderHoverThickness":"1",
                //Changing dial bg hover color
                "dialbgHoverColor":"#000000"
            },
                "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "50",
                        "code": "#e44a00"
                    },
                    {
                        "minValue": "50",
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
                "dials": {
                "dial": [{
                    "value": "67"
                }]
            }
        }
    });

    cSatScoreChart.render();
});});