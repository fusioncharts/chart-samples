$(window).load(function(){FusionCharts.ready(function () {
    var iniWidth = 500,
        iniHeight = 300,
        
        widthInput = document.getElementById('width'),
        heightInput = document.getElementById('height'),
        changeBtn = document.getElementById('change'),
        
        setDimensionOnClick = function () {
            var w = parseInt(widthInput.value, 10) || iniWidth,
            h = parseInt(heightInput.value, 10) || iniHeight;
            if (w && h) {
                cSatScoreChart.resizeTo(w, h);
            }
        },
        
        cSatScoreChart = new FusionCharts({
            type: 'angulargauge',
            renderAt: 'chart-container',
            width: iniWidth,
            height: iniHeight,
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Customer Satisfaction Score",
                    "subcaption": "Last week",
                    "lowerLimit": "0",
                    "upperLimit": "100",
                    "gaugeFillMix": "{dark-40},{light-40},{dark-20}",
                    "theme": "fint"
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
    }).render();

    if (changeBtn.addEventListener) {
        changeBtn.addEventListener("click", setDimensionOnClick);
    } else {
        changeBtn.onclick && changeBtn.onclick(setDimensionOnClick);
    }
});});