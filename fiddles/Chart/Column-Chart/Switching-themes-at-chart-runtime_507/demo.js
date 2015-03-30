$(window).load(function(){FusionCharts.ready(function () {
    var chartData = {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "theme": "zune"
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
    },
        
        revenueChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container',
            width: '500',
            height: '300',
            id: "rev-fc-chart",
            dataFormat: 'json',
            dataSource: chartData
        }).render();
    
    //Button click handler
    document.getElementById("set-theme").onclick = function () {
        //Get name of the selected theme from radio
        var radios = document.getElementsByName("theme-options"),
            len = radios && radios.length,
            isSelected,
            radElem,
            i;
        for (i = 0; i < len; i+=1) {
            radElem = radios[i]
            isSelected = radElem && radios[i].checked;
            if (isSelected) {             
                //Over-ride the theme attribute of chart with new theme name
                chartData.chart.theme = radElem.value;               
                //Update the data of chart
                FusionCharts.items["rev-fc-chart"].setJSONData(chartData);
            }
        }
    }
    document.getElementById("fint-chckbx").checked = true;
    
});});