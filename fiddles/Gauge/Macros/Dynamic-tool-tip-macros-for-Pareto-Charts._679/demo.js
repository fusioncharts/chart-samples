$(window).load(function(){FusionCharts.ready(function () {
    var ageGroupChart = new FusionCharts({
        type: 'pareto2d',
        renderAt: 'chart-container',
        width: '600',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Website Customers by Age Group",
                "subCaption": "Last year",
                "xAxisName": "Age Group",
                "pYAxisName": "Visits",
                "sYAxisname": "Cumulative Visits",
                "showValues": "0",
                "lineColor": "#1aaf5d",
                "showLineValues": "0",
                "plottooltext": "<div id='nameDiv' style='font-size: 14px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block;'>$label :</div>{br}No. Of Visitors : <b>$dataValue</b> of the total <b>$sum</b> visitors{br}Cumulative Value : <b>$cumulativeDataValue</b>{br}Cumulative Percent : <b>$cumulativePercentValue</b>",
                "theme": "fint"
            },
            "data": [{
                    "label": "Adult",
                    "value": "1250400"
                },
                {
                    "label": "Middle-age",
                    "value": "246330"
                },
                {
                    "label": "Teenage",
                    "value": "145070"
                },
                {
                    "label": "Senior Citizen",
                    "value": "10100"
                }]
            }
        });
    ageGroupChart.render();
});});