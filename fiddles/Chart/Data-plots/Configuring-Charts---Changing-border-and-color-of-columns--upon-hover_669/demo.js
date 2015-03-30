$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        id: 'myChart',
        width: '550',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly Revenue ",
                "subCaption": "Last year",
                "xAxisName": "Quarter",
                "yAxisName": "Amount (In USD)",
                "theme": "fint",
                "numberPrefix": "$",
                //To change color of plot hover
                "plotFillHoverColor":"#008ee4",
                //To change plot border color on hover
                "plotBorderHoverColor":"#000000",
                //To change plot border thickness on hover
                "plotBorderHoverThickness":"1",
                //To change plot border line to dashed line on hover
                "plotBorderHoverDashed":"1",
                //To change plot border(dashed) dash length on hover
                "plotBorderHoverDashLen":"6",
                //To change plot border(dashed) dash gap on hover
                "plotBorderHoverDashGap":"2"
            },

            "data": [
                {
                    "label": "Q1",
                    "value": "1950000"
                },
                {
                    "label": "Q2",
                    "value": "1450000"
                },
                {
                    "label": "Q3",
                    "value": "1730000"
                },
                {
                    "label": "Q4",
                    "value": "2120000"
            }
            ]
        }
    });

    revenueChart.render();

   
});});