$(window).load(function(){FusionCharts.ready(function () {
    var wealthChart = new FusionCharts({
        type: 'pyramid',
        renderAt: 'chart-container',
        id: 'wealth-pyramid-chart',
        width: '500',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "The Global Wealth Pyramid",
                "captionOnTop" : "0",
                "captionPadding": "25",
                "alignCaptionWithCanvas" : "1",
                "subcaption": "Credit Suisse 2013",
                "subCaptionFontSize" : "12",
                "borderAlpha": "20",
                "is2D": "1",
                "bgColor": "#ffffff",
                "showValues": "1",
                "numberPrefix": "$",
                "numberSuffix": "M",
                "plotTooltext": "$label of world population is worth USD $value tn ",
                "showPercentValues": "1",
                "chartLeftMargin": "40",
                "is2D": "1",
                "isSliced": "1",
                "showPlotBorder": "1",
                "plotBorderColor": "#333333",
                //Customizing hover effects
                "showHoverEffect": "1",
                "hoverColor": "#cccccc",
                "hoverAlpha": "75",
                "borderHoverColor": "#aa0000",
                "borderHoverAlpha": "100",
                "borderHoverThickness": "3"
            },
            "data": [
                {
                    "label": "Top 32 mn (0.7%)",
                    "value": "98.7"
                },
                {
                    "label": "Next 361 mn (7.7%)",
                    "value": "101.8"
                },
                {
                    "label": "Next 1.1 bn (22.9%)",
                    "value": "33"
                },
                {
                    "label": "Last 3.2 bn (68.7%)",
                    "value": "7.3"
                }
            ]
        },   
    })
    
    .render();
});});