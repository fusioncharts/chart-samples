$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly Revenue",
                "subCaption": "Last year",
                "xAxisName": "Quarter",
                "yAxisName": "Amount (In USD)",
                "numberPrefix": "$",
                "theme": "fint",
                //Custom font properties for x-axis title
                "xAxisNameFont": "Arial",
                "xAxisNameFontSize": "14",
                "xAxisNameFontColor": "#0066cc",
                "xAxisNameFontBold": "1",
                "xAxisNameFontItalic": "1",
                "xAxisNameAlpha": "100"
            },

            "data": [{
                "label": "Q1",
                "value": "1950000"
            }, {
                "label": "Q2",
                "value": "1450000"
            }, {
                "label": "Q3",
                "value": "1730000"
            }, {
                "label": "Q4",
                "value": "2120000"
            }]
        }
    }).render();
});});