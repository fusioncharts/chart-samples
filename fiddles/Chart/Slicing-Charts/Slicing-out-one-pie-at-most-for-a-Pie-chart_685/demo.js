$(window).load(function(){FusionCharts.ready(function () {
    var ageGroupChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '450',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of Store Visitors by Age Group",
                "subCaption": "Last year",                                                
                "enableMultiSlicing": "0",
                "showValues": "0",
                "theme": "fint"
            },
            "data": [{
                "label": "Teenagers (<18 yrs)",
                "value": "1250400"
            }, {
                "label": "Adults (18-40 yrs)",
                "value": "1463300"
            }, {
                "label": "Middle aged (40-60 yrs)",
                "value": "1050700"
            }, {
                "label": "Seniors (60+ yrs)",
                "value": "491000"
            }]
        }
    }).render();
});});