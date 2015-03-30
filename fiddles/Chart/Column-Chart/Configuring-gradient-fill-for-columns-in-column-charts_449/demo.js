$(window).load(function(){FusionCharts.ready(function () {
    var gradientCheckBox = document.getElementById('useGradient');

    //Set event listener for radio button
    if (gradientCheckBox.addEventListener) {
        gradientCheckBox.addEventListener("click", changeGradient);
    }
    
    function changeGradient(evt, obj) {
        //Set gradient fill for chart using usePlotGradientColor attribute
        (gradientCheckBox.checked) ?revenueChart.setChartAttribute('usePlotGradientColor', 1) : revenueChart.setChartAttribute('usePlotGradientColor', 0);
    };
    
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly Revenue",
                    "subCaption": "Last year",
                    "xAxisName": "Quarter",
                    "yAxisName": "Amount (In USD)",
                    "theme": "fint",
                    "numberPrefix": "$",
                //Removing default gradient fill from columns
                "usePlotGradientColor": "1"
            },
                "data": [{
                "label": "Q1",
                    "value": "1950000",
                    "color": "#008ee4"
            }, {
                "label": "Q2",
                    "value": "1450000",
                    "color": "#9b59b6"
            }, {
                "label": "Q3",
                    "value": "1730000",
                    "color": "#6baa01"
            }, {
                "label": "Q4",
                    "value": "2120000",
                    "color": "#e44a00"
            }]
        }
    }).render();

});});