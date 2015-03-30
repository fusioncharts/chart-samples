$(window).load(function(){FusionCharts.ready(function () {
   var showShadowCB = document.getElementById('showShadow'),
     revBulletChart = new FusionCharts({
        type: 'hbullet',
        renderAt: 'chart-container',
        width: '500',
        height: '90',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "lowerLimit": "0",
                "subCaptionFontSize": "11",
                "upperLimit": "120",
                "caption": "Last Month Revenue",
                "subcaption": "Actual vs Target (Bakersfield Central)",
                "showShadow" : "0",
                "numberPrefix": "$",
                "numberSuffix": "K",
                "chartBottomMargin": "25"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "50",
                        "code": "#e44a00",
                        "alpha": "25"
                    },
                    {
                        "minValue": "50",
                        "maxValue": "75",
                        "code": "#f8bd19",
                        "alpha": "25"
                    },
                    {
                        "minValue": "75",
                        "maxValue": "120",
                        "code": "#6baa01",
                        "alpha": "25"
                    }
                ]
            },
            "value": "82",
            "target": "90"
        }
    })
    .render();
      //Set event listener for check boxes
    showShadowCB.addEventListener && showShadowCB.addEventListener("click", toggleShadow);
    //Function to show/hide value
    function toggleShadow(evt, obj) {
        //Using showValue attribute to show hide chart value
        if(showShadowCB.checked) {
            revBulletChart.setChartAttribute('showShadow', 1);
        }
        else{
            revBulletChart.setChartAttribute('showShadow', 0);
        }
    }
});});