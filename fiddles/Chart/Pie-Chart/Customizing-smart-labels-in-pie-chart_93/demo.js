$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of revenue by product categories",
                "subCaption": "Last year",
                "numberPrefix": "$",
                "showPercentValues": "1",
                "showPercentInTooltip": "0",
                "pieRadius": "80",
                "decimals": "1",
                "enableSmartLabels": "1",
                "smartLabelClearance": "15",
                //Theme
                "theme": "fint"
            },
            "data": [
                {
                    "label": "Food",
                    "value": "285040"
                }, 
                {
                    "label": "Apparels",
                    "value": "146330"
                }, 
                {
                    "label": "Electronics",
                    "value": "145070"
                }, 
                {
                    "label": "Household",
                    "value": "22100"
                }, 
                {
                    "label": "Baby",
                    "value": "1000"
                }, 
                {
                    "label": "Sports",
                    "value": "1400"
                }, 
                {
                    "label": "Bedding",
                    "value": "1700"
                }, 
                {
                    "label": "Sanitary",
                    "value": "14000"
                }, 
                {
                    "label": "Kitchen",
                    "value": "9000"
                }
            ]
        }
    }).render();
    
});});