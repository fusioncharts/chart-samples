$(window).load(function(){FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        type: 'line',
        renderAt: 'chart-container',
        width: '600',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Website Visitors",
                "subCaption": "Last week",
                "xAxisName": "Day",
                "yAxisName": "Visits",
                //Showing the canvas border
                "showCanvasBorder": "1",
                //Setting border alpha lower
                "canvasBorderAlpha": "20",
                //Setting pading
                "canvasPadding": "30"
            },
            "data": [
                {
                    "label": "Mon",
                    "value": "5123"
                }, 
                {
                    "label": "Tue",
                    "value": "4233"
                }, 
                {
                    "label": "Wed",
                    "value": "5507"
                }, 
                {
                    "label": "Thu",
                    "value": "4110"
                }, 
                {
                    "label": "Fri",
                    "value": "5529"
                }, 
                {
                    "label": "Sat",
                    "value": "5803"
                }, 
                {
                    "label": "Sun",
                    "value": "6202"
                }
            ]
        }
    }).render();
    
});});