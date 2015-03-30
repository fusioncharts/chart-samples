$(window).load(function(){FusionCharts.ready(function () {
    var satisfactionChart = new FusionCharts({
        type: 'line',
        renderAt: 'chart-container',
        id: 'myChart',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Customer Satisfaction Averages",
                "chartBottomMargin": "30",
                "chartRightMargin": "30",
                "subcaption": "Last week",
                "xaxisname": "Day",
                "yaxisname": "Satisfaction (In%)",
                "numbersuffix": "%",
                "showValues" : "0",
                
                //Anchor cosmetics
                "anchorradius": "6",
                "anchorborderthickness": "2",
                "anchorborderColor": "#127fcb",
                "anchorBgColor": "#d3f7ff",
                //Theme
                "theme" : "fint"
            },
            "data": [
                {
                    "label": "Monday",
                    "value": "22.5"
                }, 
                {
                    "label": "Tuesday",
                    "value": "42.4"
                }, 
                {
                    "label": "Wednesday",
                    "value": "28.2",
                }, 
                {
                    "label": "Thursday",
                    "value": "22.8",
                    "anchorradius": "10",
                    "anchorAlpha": "70",
                    "anchorBorderColor" : "#cc3333",
                    "anchorBgColor" : "#ff9900"
                }, 
                {
                    "label": "Friday",
                    "value": "39.2"
                }, 
                {
                    "label": "Saturday",
                    "value": "66.45"
                }
            ]
        }
    });
    
    satisfactionChart.render();
    
});});