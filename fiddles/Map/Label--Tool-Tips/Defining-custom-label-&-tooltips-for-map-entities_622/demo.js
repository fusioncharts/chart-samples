$(window).load(function(){FusionCharts.ready(function() {
    var salesMap = new FusionCharts({
        type: 'usa',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Sales - Last Year",
                "entityFillColor": "#cccccc",
                "entityFillHoverColor": "#666666",
                "subcaption": "Highest & lowest state",
                "numberPrefix": "$"
            },
            "data": [
                {
                    "id": "IN",
                    "value": "920000",
                    "color": "#e44a00",
                    "alpha": "100",
                    "showLabel": "1",
                    "fontBold": "1",
                    //Using custom label to display
                    "displayValue": "Lowest sale.{br}$920K",
                    //Using custom tooltip
                    "tooltext": "Lowest sale for last week. Indiana $dataValue"
                }, {
                    "id": "TX",
                    "value": "97344000",
                    "color": "#6baa01",
                    "alpha": "100",
                    "showLabel": "1",
                    "fontBold": "1",
                    "displayValue": "Highest sale.{br}$97.34M",
                    "tooltext": "Highest sale for last week. Texas $dataValue"
                }
            ]
        }
    }).render();
   
});});