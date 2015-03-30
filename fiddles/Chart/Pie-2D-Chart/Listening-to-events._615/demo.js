$(window).load(function(){FusionCharts.ready(function () {
    var ageGroupChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of visitors by age group",
                "subCaption": "Last year",
                "enableSmartLabels": "0",
                "showPercentValues": "1",
                "showTooltip": "0",
                "decimals": "1",
                "theme": "fint"
            },
            "data": [
                {
                    "label": "Teenage",
                    "value": "1250400"
                }, 
                {
                    "label": "Adult",
                    "value": "1463300"
                }, 
                {
                    "label": "Mid-age",
                    "value": "1050700"
                }, 
                {
                    "label": "Senior",
                    "value": "491000"
                }
            ]
        },
        "events": {
            "dataplotrollover": function (evt, data) {
                var txt = "Age group : " + data.categoryLabel + ",<br/>No. of visitors : " + data.value;
               document.getElementById('indicatorDiv').innerHTML = txt;
            },
            "dataplotrollout": function (evt, data) {
                document.getElementById('indicatorDiv').innerHTML = 
                    "Hover on any of the pie slice to view details.";
            },
           
            
        }
    });

    ageGroupChart.render();
    
});});