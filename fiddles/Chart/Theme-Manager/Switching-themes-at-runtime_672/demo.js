$(window).load(function(){FusionCharts.ready(function () {
    var chartData = {
        "chart": {
            "caption": "Choose from any of the themes below",
            "captionFontSize": "16",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
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
    
    
    document.getElementById("set-theme").onclick = function () {
        var radios = document.getElementsByName("theme-options"),
            len = radios && radios.length,
            isSelected,
            radElem,
            i;
        for (i = 0; i < len; i+=1) {
            radElem = radios[i]
            isSelected = radElem && radios[i].checked;
            if (isSelected) {                
                chartData.chart.theme = radElem.value;               
                FusionCharts.items["rev-fc-chart"].setJSONData(chartData);
            }
        }
    }
    document.getElementById("fint-chckbx").checked = true;
    
});});