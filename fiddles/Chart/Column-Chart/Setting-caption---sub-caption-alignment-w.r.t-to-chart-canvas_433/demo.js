$(window).load(function(){FusionCharts.ready(function() {
    
    var canvasBtn = document.getElementById('canvasBtn'),        
        chartBtn = document.getElementById('chartBtn'),
        //Set the attribute based on which radio is selected
        changeAlignment = function(evt,obj){
            (document.getElementById('canvasBtn').checked) ?
                revenueChart.setChartAttribute('alignCaptionWithCanvas', 1) :
            revenueChart.setChartAttribute('alignCaptionWithCanvas', 0);
        },
        revenueChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container',
            width: '500',
            height: '300',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Monthly Revenue for Harry's SuperMart",
                    "subCaption": "Last year",
                    "theme": "fint",
                    "xAxisName": "Month",
                    "yAxisName": "Amount (In USD)",
                    "numberPrefix": "$",
                    "bgColor": "#eeeeee",
                    //Aligning caption with chart and not canvas
                    "alignCaptionWithCanvas": "0"
                },
                "data": [
                    {
                        "label": "Jan",
                        "value": "420000"
                    }, 
                    {
                        "label": "Feb",
                        "value": "810000"
                    }, 
                    {
                        "label": "Mar",
                        "value": "720000"
                    }, 
                    {
                        "label": "Apr",
                        "value": "550000"
                    }, 
                    {
                        "label": "May",
                        "value": "910000"
                    }, 
                    {
                        "label": "Jun",
                        "value": "510000"
                    }, 
                    {
                        "label": "Jul",
                        "value": "680000"
                    }, 
                    {
                        "label": "Aug",
                        "value": "620000"
                    }, 
                    {
                        "label": "Sep",
                        "value": "610000"
                    }, 
                    {
                        "label": "Oct",
                        "value": "490000"
                    }, 
                    {
                        "label": "Nov",
                        "value": "900000"
                    }, 
                    {
                        "label": "Dec",
                        "value": "730000"
                    }
                ]
            }
        }).render();
    //Listen to radio button events and change the canvas positioning
    if (canvasBtn.addEventListener && chartBtn.addEventListener) {
        canvasBtn.addEventListener("click", changeAlignment);
        chartBtn.addEventListener("click", changeAlignment);
    }
    
});});