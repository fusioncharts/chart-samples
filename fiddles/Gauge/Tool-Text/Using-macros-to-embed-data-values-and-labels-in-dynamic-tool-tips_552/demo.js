$(window).load(function(){FusionCharts.ready(function () {
    var salesChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        id: 'myChart',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly Sales Summary",
                "subcaption": "(Roll over columns to see dynamic tool-tips)",
                "subcaptionFontBold":"0",
                "xaxisname": "Quarter",
                "yaxisname": "Amount (In USD)",
                "numberprefix": "$",
                "numbersuffix": "K",
                //Tool-tip customization
                "toolTipBorderColor":"#003366",
                "toolTipBgColor":"#003366",
                "toolTipBgAlpha":"100",
                "plottooltext": "<span id='headerdiv' >$label</span>{br}<div id='valueDiv'>$dataValue</div>",
                "theme" : "fint"
            },
            "data": [
                {
                    "label": "Quarter 1",
                    "value": "195"
                }, 
                {
                    "label": "Quarter 2",
                    "value": "155"
                }, 
                {
                    "label": "Quarter 3",
                    "value": "178"
                }, 
                {
                    "label": "Quarter 4",
                    "value": "192"
                }
            ]
        }
    });
    
    salesChart.render();
    
});});