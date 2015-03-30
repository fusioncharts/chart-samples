$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "chart-container",
        "id": "myChart",
        "width": "550",
        "height": "250",
        "dataFormat": "json",
        "dataSource": {
            "chart": {
                "caption": "Quarterly Revenue ",
                "subCaption": "Last Year",
                "xAxisName": "Quarter",
                "yAxisName": "Amount (In USD)",
                "theme": "fint",                    
                "numberPrefix": "$",
                //apply gradient colors to data plot
                "usePlotGradientColor": "1",
                "plotGradientColor": "#0092F2",
                //To change gradient upon hover
                "plotHoverGradientColor": "#009AFF"
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
    });

    revenueChart.render();

   
});});