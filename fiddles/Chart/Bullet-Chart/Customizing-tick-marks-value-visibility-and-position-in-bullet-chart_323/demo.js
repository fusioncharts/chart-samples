$(window).load(function(){FusionCharts.ready(function () {
    var tickmarkCB = document.getElementById('tmCB'),
        tickvalueCB = document.getElementById('tvCB'),
        tickposCB = document.getElementById('tpCB'),
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
                    "numberPrefix": "$",
                    "numberSuffix": "K",
                    "chartBottomMargin": "25",
                    "captionPadding": "7"
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
    //Function to show/hide tick mark
    function showTickMark(evt, obj) {
        //Using showTickMarks attribute to show/hide ticks
        (tickmarkCB.checked) ? revBulletChart.setChartAttribute('showTickMarks', 1) : 
        revBulletChart.setChartAttribute('showTickMarks', 0);
        
    }
    //Function to show/hide tick value
    function showTickValue(evt, obj) {
        //Using showTickValues attribute to show/hide tick value 
        (tickvalueCB.checked) ? revBulletChart.setChartAttribute('showTickValues', 1) :
        revBulletChart.setChartAttribute('showTickValues', 0);
    }
     //Function to show/hide tick value
    function toggleTickPos(evt, obj) {
        //Using showTickValues attribute to set tick position 
        (tickposCB.checked) ? revBulletChart.setChartAttribute('ticksBelowGraph', 0) :
        revBulletChart.setChartAttribute('ticksBelowGraph', 1);
    }
    
    //Set event listener for check boxes and radio buttons
    tickmarkCB.addEventListener && tickmarkCB.addEventListener("click", showTickMark);
    tickvalueCB.addEventListener && tickvalueCB.addEventListener("click", showTickValue);
    tickposCB.addEventListener && tickposCB.addEventListener("click", toggleTickPos);

});});