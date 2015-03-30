$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'mscolumn2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Comparison of Quarterly Revenue",
                "subCaption": "(Roll over columns to view tooltip using macros)",
                "subCaptionFontBold": "0",
                "xAxisname": "Quarter",
                "yAxisName": "Amount (In USD)",
                "numberPrefix": "$",
                //Dynamic tool-text using a combination of HTML and macros
                "plottooltext":"Year : <b>$seriesName</b>{br}$xAxisName : <b>$label</b>{br}$yAxisName : <b>$dataValue</b>",
                //Theme
                "theme" : "fint"
            },
            "categories": [
                {
                    "category": [
                        { "label": "Quarter 1" },
                        { "label": "Quarter 2" },
                        { "label": "Quarter 3" },
                        { "label": "Quarter 4" }
                    ]
                }
            ],
            "dataset": [
                {
                    "seriesname": "Previous Year",
                    "data": [
                        { "value": "10000" }, 
                        { "value": "11500" }, 
                        { "value": "12500" }, 
                        { "value": "15000" }
                    ]
                }, 
                {
                    "seriesname": "This Year",
                    "data": [
                        { "value": "25400" }, 
                        { "value": "29800" }, 
                        { "value": "21800" }, 
                        { "value": "26800" }
                    ]
                }
            ]
        }
    });
    
    revenueChart.render();
});});