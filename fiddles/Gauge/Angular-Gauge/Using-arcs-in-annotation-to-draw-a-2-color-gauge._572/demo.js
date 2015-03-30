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
                "majorTMThickness" : "1",
                "majorTMHeight": "40"                
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
                                "color": "#6baa01",
                                "alpha": "70",
                                "x": "200",
                                "y": "235",
                                "startangle": "0",
                                "endangle": "45"
                            },                           
                            {
                                "type": "arc",
                                "radius": "140",
                                "innerRadius": "120",
                                "borderColor":"#FFFFFF",
                                "color": "#f8bd19",
                                "alpha": "70",
                                "x": "200",
                                "y": "235",
                                "startangle": "45",
                                "endangle": "90"
                            },                           
                            {
                                "type": "arc",
                                "radius": "140",
                                "innerRadius": "120",
                                "borderColor":"#FFFFFF",
                                "color": "#e44a00",
                                "alpha": "70",
                                "x": "200",
                                "y": "235",
                                "startangle": "90",
                                "endangle": "180"
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