$(window).load(function(){FusionCharts.ready(function () {
    var cscGauge = new FusionCharts({
        type: 'hlineargauge',
        renderAt: 'chart-container',
        width: '400',
        height: '150',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Customer satisfaction score",
                "subcaption": "Current week - Garden Groove Harbour",                               
                "theme": "fint",
                "showValue": "0",                
                //Attributes to customize pointer on hover.
                "pointerBgHoverColor": "#ffffff",
                "pointerBgHoverAlpha": "80",
                "pointerHoverRadius": "12",
                "showBorderOnHover": "1",
                "pointerBorderHoverColor": "#333333",
                "pointerBorderHoverThickness": "2"
            },
            "colorRange": {
                "color": [{
                    "minValue": "0",
                        "maxValue": "3.5",
                        "label": "Low",
                        "code": "#e44a00"
                }, {
                    "minValue": "3.5",
                        "maxValue": "",
                        "label": "Moderate",
                        "code": "#f8bd19"
                }, {
                    "minValue": "7",
                        "maxValue": "10",
                        "label": "High",
                        "code": "#6baa01"
                }]
            },
            "pointers": {
                "pointer": [{
                    "value": "7.25"
                }]
            }
        }
    })
    .render();
});});