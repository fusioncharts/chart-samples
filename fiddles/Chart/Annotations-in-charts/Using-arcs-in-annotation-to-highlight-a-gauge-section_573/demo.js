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
                "gaugeOuterRadius":"160",
                "gaugeInnerRadius":"140",
                "gaugeFillMix":"{dark-10}",
                "majorTMThickness" : "0",
                "majorTMHeight": "0"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "50",
                        "code": "#F45B00"
                    },
                    {
                        "minValue": "50",
                        "maxValue": "75",
                        "code": "#F2C500"
                    },
                    {
                        "minValue": "75",
                        "maxValue": "100",
                        "code": "#8CBB2C"
                    }
                ]
            },
            "annotations": {                
                "showbelow": "1",
                "groups": [
                    {
                        "id": "transarc",                                                                        
                        "items": [
                            {
                                "type": "arc",
                                "radius": "140",
                                "borderColor":"#FFFFFF",
                                "innerRadius": "120",
                                "color": "#8CBB2C",
                                "alpha": "90",
                                "x": "200",
                                "y": "235",
                                "startangle": "0",
                                "endangle": "45"
                            }
                        ]
                    }
                ]
            },
            "dials": {
                "dial": [{
                    "value": "67"
                }]
            }
        }
    }).render();
});
});