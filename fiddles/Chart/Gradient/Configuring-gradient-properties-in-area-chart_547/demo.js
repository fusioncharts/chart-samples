$(window).load(function(){FusionCharts.ready(function () {
    var salesData = [
            {
                "label": "Mon",
                "value": "4123"
            }, 
            {
                "label": "Tue",
                "value": "4633"
            }, 
            {
                "label": "Wed",
                "value": "5507"
            }, 
            {
                "label": "Thu",
                "value": "4910"
            }, 
            {
                "label": "Fri",
                "value": "5529"
            }, 
            {
                "label": "Sat",
                "value": "5803"
            }, 
            {
                "label": "Sun",
                "value": "6202"
            }
        ],
        salesChart = new FusionCharts({
            type: 'area2d',
            renderAt: 'chart-container1',
            width: '500',
            height: '300',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Sales of liquor",
                    "subCaption": "Last week",
                    "xAxisName": "Day",
                    "yAxisName": "Sales (In USD)",
                    "numberPrefix": "$",
                    "theme": "fint",
                    "usePlotGradientColor": "1",
                    "plotGradientColor": "#f2c500",
                    "plotFillRatio": "1:100",
                    "plotFillAngle":"270"	
                },
                
                "data": salesData
            }
        }).render(),
        
        salesChart2 = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container2',
            width: '500',
            height: '300',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Sales of liquor",
                    "subCaption": "Last week",
                    "xAxisName": "Day",
                    "yAxisName": "Sales (In USD)",
                    "numberPrefix": "$",
                    "theme": "fint",
                    "usePlotGradientColor": "1",
                    "plotGradientColor": "#f2c500",
                    "plotFillRatio": "1:100",
                    "plotFillAngle":"270"	
                },
                
                "data": salesData
            }
        }).render(),
        
        salesChart3 = new FusionCharts({
            type: 'area2d',
            renderAt: 'chart-container3',
            width: '500',
            height: '300',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Sales of liquor",
                    "subCaption": "Last week",
                    "xAxisName": "Day",
                    "yAxisName": "Sales (In USD)",
                    "numberPrefix": "$",
                    "theme": "fint",
                    "usePlotGradientColor": "1",
                    "plotGradientColor": "#1aaf5d",
                    "plotFillRatio": "1:100",
                    "plotFillAngle":"0"	
                },
                
                "data": salesData
            }
        }).render(),
        
        salesChart4 = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container4',
            width: '500',
            height: '300',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Sales of liquor",
                    "subCaption": "Last week",
                    "xAxisName": "Day",
                    "yAxisName": "Sales (In USD)",
                    "numberPrefix": "$",
                    "theme": "fint",
                    "usePlotGradientColor": "1",
                    "plotGradientColor": "#1aaf5d",
                    "plotFillRatio": "1:100",
                    "plotFillAngle":"0"	
                },
                
                "data": salesData
            }
        }).render();
});});