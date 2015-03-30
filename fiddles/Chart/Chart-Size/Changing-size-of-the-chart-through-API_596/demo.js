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
                revenueChart.resizeTo(w, h);
            }
        },
        
        revenueChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container',
            width: iniWidth,
            height: iniHeight,
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Monthly revenue",
                    "subCaption": "Last year",
                    "xAxisName": "Month",
                    "yAxisName": "Amount ($)",
                    "numberPrefix": "$",
                    "theme": "fint"
                },

                "data": [
                    {
                        "label": "Jan",
                        "value": "420000"
                    },
                    {
                        "label": "Feb",
                        "value": "810000"
                    }, 
                    {
                        "label": "Mar",
                        "value": "720000"
                    },
                    {
                        "label": "Apr",
                        "value": "550000"
                    },
                    {
                        "label": "May",
                        "value": "910000"
                    },
                    {
                        "label": "Jun",
                        "value": "510000"
                    },
                    {
                        "label": "Jul",
                        "value": "680000"
                    },
                    {
                        "label": "Aug",
                        "value": "620000"
                    },
                    {
                        "label": "Sep",
                        "value": "610000"
                    },
                    {
                        "label": "Oct",
                        "value": "490000"
                    },
                    {
                        "label": "Nov",
                        "value": "900000"
                    },
                    {
                        "label": "Dec",
                        "value": "730000"
                    }
                ]
            }
        });

    revenueChart.render();

    if (changeBtn.addEventListener) {
        changeBtn.addEventListener("click", setDimensionOnClick);
    } else {
        changeBtn.onclick && changeBtn.onclick(setDimensionOnClick);
    }
});});