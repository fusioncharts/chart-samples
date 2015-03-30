$(window).load(function(){FusionCharts.ready(function () {
    var winLossChart = new FusionCharts({
        type: 'sparkwinloss',
        renderAt: 'chart-container',
        width: '400',
        height: '60',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Bobby Fischer (vs. Spassky)",
                "subcaption": "World Chess Championship 1972",
                "subCaptionFontSize": "11",
                "numberPrefix": "$",
                "chartBottomMargin": "20" 
            },
            "dataset": [
                {
                    "data": [
                        { "value": "L" },
                        { "value": "L" },
                        { "value": "W" },
                        { "value": "D" },	
                        { "value": "W" },	
                        { "value": "W" },	
                        { "value": "D" },	
                        { "value": "W" },	
                        { "value": "D" },	
                        { "value": "W" },	
                        { "value": "L" },	
                        { "value": "D" },	
                        { "value": "W" },	
                        { "value": "D" },	
                        { "value": "D" },	
                        { "value": "D" },	
                        { "value": "D" },	
                        { "value": "D" },	
                        { "value": "D" },	
                        { "value": "D" },	
                        { "value": "W" }
                    ]
                }
            ]
        }
    })
    .render();
});});