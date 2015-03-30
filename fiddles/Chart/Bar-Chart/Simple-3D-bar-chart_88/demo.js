$(window).load(function(){FusionCharts.ready(function () {
    var salesChart = new FusionCharts({
        type: 'bar3d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Top 5 Stores by Sales",
                "subCaption": "Last month",
                "xAxisName": "Stores",
                "yAxisName": "Sales (in USD)",
                "numberPrefix": "$",
                "alignCaptionWithCanvas": "0",
                "canvasBgAlpha": "0",
                //Theme  
                "theme" : "fint"
            },
            "data": [
                {
                    "label": "Bakersfield Central",
                    "value": "880000"
                }, 
                {
                    "label": "Garden Groove harbour",
                    "value": "730000"
                }, 
                {
                    "label": "Los Angeles Topanga",
                    "value": "590000"
                }, 
                {
                    "label": "Compton-Rancho Dom",
                    "value": "520000"
                }, 
                {
                    "label": "Daly City Serramonte",
                    "value": "330000"
                }
            ]
        }
    })
    .render();
});});