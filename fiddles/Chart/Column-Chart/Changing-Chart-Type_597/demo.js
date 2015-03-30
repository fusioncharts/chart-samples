$(window).load(function(){FusionCharts.ready(function () {
    var radio = [],
        radElem,
        val,
        revenueChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container',
            width: '500',
            height: '400',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Monthly revenue",
                    "subCaption": "Last year",
                    "xAxisName": "Month",
                    "yAxisName": "Revenue (In USD)",
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

    radio = document.getElementsByTagName('input');
    for (i = 0; i < radio.length; i++) {
        radElem = radio[i];
        if (radElem.type === 'radio') {                        
            radElem.onclick = function(){
                val = this.getAttribute('value');
                val && revenueChart.chartType(val);                              
            };
        }
    }    

});});