$(window).load(function(){FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        id: 'myChart',
        width: '500',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Age group of website customers",
                "subCaption": "Last year",
                "numberPrefix": "$",
                "valueFontSize": "11",
                "valueBgColor": "#a7d3ff",
                //Changing alpha of value font
                "valueFontAlpha": "60",
                //Changing alpha of value background
                "valueAlpha": "10",
                "valueBorderColor": "#4a739d",
                "valueBorderPadding": "5",
                "showPercentValues": "1",
                "showPercentInToolTip": "0"
            },
            "data": [
                {
                    "label": "Teenage",
                    "value": "1250400"
                },
                {
                    "label": "Adult",
                    "value": "1463300"
                },
                {
                    "label": "Middle-age",
                    "value": "1050700"
                },
                {
                    "label": "Senior Citizen",
                    "value": "491000"
                }
            ]
        }
    }).render();

});});