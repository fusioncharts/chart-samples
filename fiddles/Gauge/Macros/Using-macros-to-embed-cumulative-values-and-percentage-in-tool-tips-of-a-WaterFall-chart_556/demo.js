$(window).load(function(){FusionCharts.ready(function () {
    var ageGroupChart = new FusionCharts({
        type: 'pareto2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Website Customers by Age Group",
                    "subCaption": "Last year",
                    "paletteColors": "#008ee4",
                    "lineColor": "#f8bd19",
                    "xAxisName": "Age Group",
                    "pYAxisName": "Visits",
                    "sYAxisname": "Cumulative Visits",
                    "showValues": "0",
                    //Dynamic tool-text with macros and HTML
                    "plottooltext": "<div id='nameDiv'>$label :</div>{br}No. Of Visitors : <b>$dataValue</b> of the total <b>$sum</b> visitors{br}Cumulative Value : <b>$cumulativeDataValue</b>{br}Cumulative Percent : <b>$cumulativePercentValue</b>",
                //Theme
                "theme" : "fint"
            },
                "data": [

            {

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

            }

            ]

        }
    });

    ageGroupChart.render();
});});