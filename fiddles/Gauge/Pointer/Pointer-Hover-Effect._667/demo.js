$(window).load(function(){FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'hlineargauge',
        renderAt: 'chart-container',
        width: '400',
        height: '140',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Customer satisfaction score",
                    "subcaption": "Current week - Garden Groove Harbour",
                    "lowerLimit": "0",
                    "upperLimit": "100",
                    "numberSuffix": "%",
                    "valueAbovePointer": "0",
                    "valueFontColor": "#ffffff",
                    "valueFontSize": "14",
                    "captionPadding": "0",
                    "pointerBgColor": "#ffffff",
                    "theme":"fint"
                
            },
                "colorRange": {
                "color": [{
                    "minValue": "0",
                        "maxValue": "35",
                        "label": "Low",
                        "code": "#e44a00",
                }, {
                    "minValue": "35",
                        "maxValue": "70",
                        "label": "Moderate",
                        "code": "#f8bd19"
                }, {
                    "minValue": "70",
                        "maxValue": "100",
                        "label": "High",
                        "code": "#6baa01"
                }]
            },
                "pointers": {
                "pointer": [{
                    "value": "72.5",
                    "showBorder" : "1",
                    //Enable the hover effect
                    "showHoverEffect" : "1",
                    //Set the border alpha on hover
                    "borderHoverAlpha": "50",
                    //Set the border thickness on hover
                    "borderHoverThickness": "5",
                    //Set the background color on hover
                    "bgHoverColor" : "#FF0000",
                    //Set the background alpha on hover
                    "bgHoverAlpha" : "70"
                }]
            }
        }
    })
    .render();
});});