$(window).load(function(){FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        type: 'line',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Visitors to website",
                "subCaption": "Last week",
                "xAxisName": "Day",
                "yAxisName": "Visits",
                "theme": "fint",
                //Additional anchor hover cosmetics attributes
                "anchorBgHoverColor": "#96d7fa",                
                "anchorBorderHoverThickness" : "4",
                "anchorHoverRadius":"7"               
            },
            "data": [{
                "label": "Mon",
                "value": "5123"
            }, {
                "label": "Tue",
                "value": "4233"
            }, {
                "label": "Wed",
                "value": "5507"
            }, {
                "label": "Thu",
                "value": "4110"
            }, {
                "label": "Fri",
                "value": "5529"
            }, {
                "label": "Sat",
                "value": "5803"
            }, {
                "label": "Sun",
                "value": "6202"
            }]
        }
    }).render();
});});