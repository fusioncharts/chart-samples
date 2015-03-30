$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'chart-container',
        width: '500',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of Revenue by Product Categories",
                "subCaption": "Los Angeles Topanga - Last month",
                "numberPrefix": "$",                
                "startingAngle": "310",
                "decimals": "0",                
                "defaultCenterLabel": "Total revenue: $60K",
                "centerLabel": "Revenue from $label: $value",                
                "theme": "fint"                
            },
            "data": [{
                "label": "Food",
                "value": "28504"
            }, {
                "label": "Apparels",
                "value": "14633"
            }, {
                "label": "Electronics",
                "value": "10507"
            }, {
                "label": "Household",
                "value": "4910"
            }]
        }
    }).render();
});});